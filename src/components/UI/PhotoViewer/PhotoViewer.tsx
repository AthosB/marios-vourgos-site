// typescript
import { useEffect, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import styles from "./PhotoViewer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { GenericItemType } from "@/Types/types";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import panzoom from "panzoom";

interface photoViewerProps {
  open?: boolean;
  media?: GenericItemType | null;
  onClose?: () => void;
}

type PanzoomWithCleanup = ReturnType<typeof panzoom> & { _cleanup?: () => void } | null;

export default function PhotoViewer({
                                      open = false,
                                      media = null,
                                      onClose = () => null,
                                    }: photoViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const viewerRef = useRef<InstanceType<typeof Viewer> | null>(null);
  const panzoomRef = useRef<PanzoomWithCleanup>(null);

  const stopAll = (e: Event) => {
    try { e.preventDefault(); } catch {}
    try { e.stopPropagation?.(); } catch {}
    try { (e as any).stopImmediatePropagation?.(); } catch {}
  };

  const setOriginalImageVisible = (visible: boolean) => {
    if (!imgRef.current) return;
    if (visible) {
      imgRef.current.style.visibility = "";
      imgRef.current.style.display = "block";
    } else {
      imgRef.current.style.visibility = "hidden";
    }
  };

  const restoreAllAndDestroy = () => {
    setOriginalImageVisible(true);

    try { (viewerRef.current as any)?._shieldCleanup?.(); } catch {}
    try { viewerRef.current?.destroy(); } catch {}
    viewerRef.current = null;

    try { panzoomRef.current?.dispose(); } catch {}
    panzoomRef.current = null;
  };

  const closeModalHandler = () => {
    restoreAllAndDestroy();
    if (onClose) onClose();
  };

  useEffect(() => {
    if (!open) return;

    const docHandler = (e: Event) => {
      if (!containerRef.current) return;
      const target = e.target as Node | null;
      if (target && (containerRef.current.contains(target) || target instanceof HTMLImageElement)) {
        stopAll(e);
      }
    };

    document.addEventListener("contextmenu", docHandler, true);
    return () => document.removeEventListener("contextmenu", docHandler, true);
  }, [open]);

  // listen for external requests to close the preview (BackButtonGuard dispatches this)
  useEffect(() => {
    const onClosePreview = () => {
      closeModalHandler();
    };
    window.addEventListener("closePreview", onClosePreview as EventListener);
    return () => window.removeEventListener("closePreview", onClosePreview as EventListener);
  }, []);

  // push a harmless history entry when viewer opens so Back closes the viewer first
  useEffect(() => {
    const original = window.location.href.split('#')[0];
    const pvHash = '#pv';
    let pushed = false;

    const pushPV = () => {
      if (pushed) return;
      try {
        history.pushState({ pv: true }, '', original + pvHash);
      } catch {}
      pushed = true;
    };

    const restore = () => {
      if (!pushed) return;
      try {
        history.replaceState(null, '', original);
      } catch {}
      pushed = false;
    };

    const onPop = () => {
      // when back pressed, close the viewer instead of leaving the site
      closeModalHandler();
      // restore URL so next back will behave normally
      restore();
    };

    if (open) {
      pushPV();
      window.addEventListener('popstate', onPop);
    }

    return () => {
      window.removeEventListener('popstate', onPop);
      // ensure URL restored when viewer closes/unmounts
      restore();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ensure proper cleanup when component unmounts
  useEffect(() => {
    return () => {
      setOriginalImageVisible(true);
      try { panzoomRef.current?._cleanup?.(); } catch {}
      try { (viewerRef.current as any)?._shieldCleanup?.(); } catch {}
      try { viewerRef.current?.destroy(); } catch {}
      viewerRef.current = null;
      panzoomRef.current = null;
    };
  }, []);

  // If media changes while dialog is open, force-clean previous viewer/panzoom so new media initializes cleanly
  useEffect(() => {
    if (!open) return;
    // switching to video: remove any image viewer
    if (media?.video) {
      if (viewerRef.current) {
        try { (viewerRef.current as any)._shieldCleanup?.(); } catch {}
        try { viewerRef.current.destroy(); } catch {}
        viewerRef.current = null;
      }
      if (panzoomRef.current) {
        try { panzoomRef.current.dispose(); } catch {}
        panzoomRef.current = null;
      }
      setOriginalImageVisible(false);
    } else {
      // switching to image: stop/cleanup video panzoom and reset video
      if (panzoomRef.current) {
        try { panzoomRef.current.dispose(); } catch {}
        panzoomRef.current = null;
      }
      if (videoRef.current) {
        try { videoRef.current.pause(); videoRef.current.currentTime = 0; } catch {}
      }
      // the image `onLoad` will initialize the viewer and hide the original
      setOriginalImageVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media?.src, media?.video, open]);

  const onImageLoad = () => {
    if (viewerRef.current) return;
    if (!containerRef.current) return;

    setOriginalImageVisible(true);

    viewerRef.current = new Viewer(containerRef.current, {
      inline: true,
      navbar: false,
      title: false,
      toolbar: {
        zoomIn: true,
        zoomOut: true,
        oneToOne: true,
        reset: true,
        prev: false,
        play: false,
        next: false,
        download: false,
        info: false,
        rotateLeft: false,
        rotateRight: false,
        flipHorizontal: false,
        flipVertical: false,
      },
      movable: true,
      zoomable: true,
      scalable: true,
      transition: true,
      zoomRatio: 0.2,
      minZoomRatio: 0.01,
      maxZoomRatio: 8,
      backdrop: false,
      className: styles.ViewerJsRoot,
      hidden() {
        closeModalHandler();
      },
    });

    setOriginalImageVisible(false);

    const vInst = viewerRef.current as any;
    const vRoot: HTMLElement | null = vInst?.viewer || containerRef.current;

    const preventCtx = (e: Event) => stopAll(e);
    const preventRightMouse = (e: MouseEvent) => {
      if (e.button === 2) stopAll(e);
    };
    const preventDrag = (e: Event) => stopAll(e);

    vRoot?.addEventListener("contextmenu", preventCtx, true);
    vRoot?.addEventListener("mousedown", preventRightMouse, true);
    vRoot?.addEventListener("dragstart", preventDrag, true);

    (viewerRef.current as any)._shieldCleanup = () => {
      vRoot?.removeEventListener("contextmenu", preventCtx, true);
      vRoot?.removeEventListener("mousedown", preventRightMouse, true);
      vRoot?.removeEventListener("dragstart", preventDrag, true);
    };
  };

  const onVideoReady = () => {
    if (panzoomRef.current) return;
    if (!videoRef.current) return;

    panzoomRef.current = panzoom(videoRef.current, {
      maxZoom: 8,
      minZoom: 0.1,
      bounds: true,
      boundsPadding: 0.1,
    }) as ReturnType<typeof panzoom> & { _cleanup?: () => void };

    const dblHandler = () => {
      panzoomRef.current?.zoomAbs(0, 0, 1);
      panzoomRef.current?.moveTo(0, 0);
    };
    videoRef.current.addEventListener("dblclick", dblHandler);

    const cleanup = () => {
      if (videoRef.current) videoRef.current.removeEventListener("dblclick", dblHandler);
    };
    if (panzoomRef.current) panzoomRef.current._cleanup = cleanup;
  };

  return (
    <Dialog
      open={open}
      className={styles.PhotoViewer}
      fullScreen
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "var(--mario-bg-color)",
          },
        },
      }}
      onClose={closeModalHandler}
    >
      <div className={styles.CloseActionIcon} onClick={closeModalHandler}>
        <CloseIcon fontSize={"large"} />
      </div>

      <div className={styles.PhotoViewerContent}>
        <div
          ref={containerRef}
          className={styles.Photo + " Photo"}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation?.();
            (e as any).stopImmediatePropagation?.();
          }}
          onMouseDown={(e) => {
            if (e.button === 2) {
              e.preventDefault();
              e.stopPropagation?.();
              (e as any).stopImmediatePropagation?.();
            }
          }}
          onDragStart={(e) => {
            e.preventDefault();
            e.stopPropagation?.();
            (e as any).stopImmediatePropagation?.();
          }}
        >
          {media && media.src && media.video ? (
            <video
              key={media.src}
              ref={videoRef}
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              width={"auto"}
              height={720}
              style={{ objectFit: "cover", marginTop: "6px", transformOrigin: "center center" }}
              onLoadedMetadata={onVideoReady}
              draggable={false}
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation?.();
                (e as any).stopImmediatePropagation?.();
              }}
              onDragStart={(e) => {
                e.preventDefault();
                e.stopPropagation?.();
                (e as any).stopImmediatePropagation?.();
              }}
            >
              <source src={media.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              ref={imgRef}
              src={media?.src ?? undefined}
              alt={media?.alt ?? "Preview"}
              style={{ display: "none", margin: "0 auto", maxWidth: "90vw", height: "auto", cursor: "zoom-in" }}
              draggable={false}
              onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation?.();
                (e as any).stopImmediatePropagation?.();
              }}
              onDragStart={(e) => {
                e.preventDefault();
                e.stopPropagation?.();
                (e as any).stopImmediatePropagation?.();
              }}
              onLoad={onImageLoad}
            />
          )}
          <div className={styles.ImageTitle}>{media?.title}</div>
          <div className={styles.ImageDescription} style={{ textAlign: "center" }}>
            {media?.description}
          </div>
          {media && media.src && media.src.includes("photography") && (
            <div className={styles.ImageDisclaimer}>
              Disclaimer: All photos are original photos as shot without any digital manipulation
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
