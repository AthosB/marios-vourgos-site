// typescript
import { useEffect, useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import styles from "./PhotoViewer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { GenericItemType } from "@/Types/types";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import panzoom from "panzoom";

interface photoViewerProps {
  open?: boolean;
  onClose?: () => void;
}

type PanzoomWithCleanup = ReturnType<typeof panzoom> & { _cleanup?: () => void } | null;

export default function PhotoViewer({
  open = false,
  onClose = () => null,
}: photoViewerProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const viewerRef = useRef<InstanceType<typeof Viewer> | null>(null);
  const panzoomRef = useRef<PanzoomWithCleanup>(null);

  const closeModalHandler = () => {
    // cleanup any added shield listeners first
    (viewerRef.current as any)?._shieldCleanup?.();
    viewerRef.current?.destroy();
    viewerRef.current = null;

    if (panzoomRef.current) {
      panzoomRef.current.dispose();
      panzoomRef.current = null;
    }

    setSelectedPhoto(null);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (!open) return;
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("previewData") : null;
      const previewData = raw ? (JSON.parse(raw) as GenericItemType) : null;
      setSelectedPhoto(previewData);
    } catch {
      setSelectedPhoto(null);
    }
  }, [open]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "previewData") {
        try {
          setSelectedPhoto(e.newValue ? (JSON.parse(e.newValue) as GenericItemType) : null);
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (!open) {
      // cleanup shield before destroying viewer
      (viewerRef.current as any)?._shieldCleanup?.();
      viewerRef.current?.destroy();
      viewerRef.current = null;

      if (panzoomRef.current) {
        panzoomRef.current.dispose();
        panzoomRef.current = null;
      }
      setSelectedPhoto(null);
    }
  }, [open]);

  useEffect(() => {
    // when changing selected photo, remove existing instances and cleanup listeners
    (viewerRef.current as any)?._shieldCleanup?.();
    viewerRef.current?.destroy();
    viewerRef.current = null;

    if (panzoomRef.current) {
      panzoomRef.current.dispose();
      panzoomRef.current = null;
    }
  }, [selectedPhoto]);

  const onImageLoad = () => {
    if (viewerRef.current) return;
    if (!containerRef.current) return;

    // initialize Viewer only for images
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
        flipVertical: false
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

    // protect viewer DOM from right-click / drag (block context menu and dragstart)
    const vInst = viewerRef.current as any;
    const vRoot: HTMLElement | null = vInst?.viewer || containerRef.current;

    const preventCtx = (e: Event) => e.preventDefault();
    const preventRightMouse = (e: MouseEvent) => {
      if (e.button === 2) e.preventDefault();
    };
    const preventDrag = (e: Event) => e.preventDefault();

    vRoot?.addEventListener("contextmenu", preventCtx);
    vRoot?.addEventListener("mousedown", preventRightMouse);
    vRoot?.addEventListener("dragstart", preventDrag);

    // store cleanup so we can call it before destroying viewer
    (viewerRef.current as any)._shieldCleanup = () => {
      vRoot?.removeEventListener("contextmenu", preventCtx);
      vRoot?.removeEventListener("mousedown", preventRightMouse);
      vRoot?.removeEventListener("dragstart", preventDrag);
    };
  };

  const onVideoReady = () => {
    // initialize panzoom for video (so you can zoom/pan)
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

  useEffect(() => {
    return () => {
      if (panzoomRef.current) {
        panzoomRef.current._cleanup?.();
      }
      // cleanup viewer shield if component unmounts
      (viewerRef.current as any)?._shieldCleanup?.();
    };
  }, []);

  return (
    <Dialog
      open={open}
      className={styles.PhotoViewer}
      fullScreen
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "var(--mario-bg-color)"
          }
        }
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
          onContextMenu={(e) => e.preventDefault()}
          onMouseDown={(e) => { if (e.button === 2) e.preventDefault(); }}
          onDragStart={(e) => e.preventDefault()}
        >
          {selectedPhoto && selectedPhoto.src && selectedPhoto.video ? (
            <video
              key={selectedPhoto.src}
              ref={videoRef}
              src={selectedPhoto.src}
              autoPlay
              loop
              muted
              playsInline
              width={'auto'}
              height={720}
              style={{objectFit: "cover", marginTop: '6px', transformOrigin: "center center"}}
              onLoadedMetadata={onVideoReady}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <source src={selectedPhoto.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              ref={imgRef}
              src={selectedPhoto?.src ?? undefined}
              alt={selectedPhoto?.alt ?? "Preview"}
              style={{ display: "none", margin: "0 auto", maxWidth: "90vw", height: "auto", cursor: "zoom-in" }}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onLoad={onImageLoad}
            />) }
          <div className={styles.ImageTitle}>{selectedPhoto?.title}</div>
          <div className={styles.ImageDescription} style={{ textAlign: "center" }}>
            {selectedPhoto?.description}
          </div>
          {(selectedPhoto && selectedPhoto.src && selectedPhoto.src.includes("photography")) && (
            <div className={styles.ImageDisclaimer}>
              Disclaimer: All photos are original photos as shot without any digital manipulation
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}
