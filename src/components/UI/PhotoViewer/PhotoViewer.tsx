import React, { useEffect, useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import styles from "./PhotoViewer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { GenericItemType } from "@/Types/types";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

interface photoViewerProps {
  open?: boolean;
  onClose?: () => void;
}

export default function PhotoViewer({
  open = false,
  onClose = () => null
}: photoViewerProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const viewerRef = useRef<InstanceType<typeof Viewer> | null>(null);

  const closeModalHandler = () => {
    viewerRef.current?.destroy();
    viewerRef.current = null;
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
      viewerRef.current?.destroy();
      viewerRef.current = null;
      setSelectedPhoto(null);
    }
  }, [open]);

  useEffect(() => {
    viewerRef.current?.destroy();
    viewerRef.current = null;
  }, [selectedPhoto]);

  const onImageLoad = () => {
    if (viewerRef.current) return;
    if (!containerRef.current) return;

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
      // allow zooming out to original fitted size (and below) by lowering minZoomRatio
      zoomRatio: 0.2,
      minZoomRatio: 0.01,
      maxZoomRatio: 8,
      backdrop: false,
      className: styles.ViewerJsRoot,
      hidden() {
        closeModalHandler();
      },
    });
  };

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
        <div ref={containerRef} className={styles.Photo + " Photo"}>
          <img
            ref={imgRef}
            src={selectedPhoto?.src}
            alt={selectedPhoto?.alt ?? "Preview"}
            style={{ display: "none", margin: "0 auto", maxWidth: "90vw", height: "auto", cursor: "zoom-in" }}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onLoad={onImageLoad}
          />
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
