// File: `src/app/view/page.tsx`
'use client'

import styles from './View.module.scss'
import { GenericItemType } from "@/Types/types";
import React, { useEffect, useRef, useCallback } from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";

export default function View() {
  const storedData = typeof window !== 'undefined' ? localStorage.getItem('previewData') : null;
  const previewData = storedData ? JSON.parse(storedData) as GenericItemType : null;
  const showDisclaimer = (previewData && previewData.src && previewData.src.includes('photography')) as boolean;

  const imgRef = useRef<HTMLImageElement | null>(null);
  const viewerRef = useRef<InstanceType<typeof Viewer> | null>(null);

  const backButtonClickHandler = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    if (!previewData?.src || !imgRef.current) return;

    // remove existing instance if present
    viewerRef.current?.destroy();
    viewerRef.current = null;

    // inject CSS to change overlay background to purple
    const styleEl = document.createElement('style');
    styleEl.dataset.__viewer_overlay = 'true';
    styleEl.textContent = `
      /* Viewer.js overlay mask background -> purple */
      .viewer-modal .viewer-mask,
      .viewer-mask {
        background-color: rgba(128, 0, 128, 0.85) !important;
      }
    `;
    document.head.appendChild(styleEl);

    // create viewer instance for single image with minimal toolbar
    viewerRef.current = new Viewer(imgRef.current, {
      inline: false,
      navbar: false,
      title: false,
      // toolbar can be an object to enable/disable specific buttons
      toolbar: {
        zoomIn: true,
        zoomOut: true,
        reset: true,
        prev: false,
        play: false,
        next: false,
        oneToOne: false,
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
      zoomRatio: 0.4,
      minZoomRatio: 0.5,
      maxZoomRatio: 8,
      backdrop: false,
      className: styles.ViewerJsRoot,
      // when the viewer is hidden (closed), navigate back
      hidden() {
        backButtonClickHandler();
      },
    });

    // auto-open viewer on mount
    viewerRef.current.show();

    return () => {
      viewerRef.current?.destroy();
      viewerRef.current = null;
      styleEl.remove();
    };
  }, [previewData?.src, backButtonClickHandler]);

  if (!previewData) return null;
  return (
    <div className={styles.ViewPage + ' ViewPage'}>
      {/*<CloseIcon*/}
      {/*  onClick={backButtonClickHandler}*/}
      {/*  style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 3000, cursor: 'pointer' }}*/}
      {/*  fontSize={'large'}*/}
      {/*/>*/}
      <div className={styles.Photo + ' Photo'}>
        <img
          ref={imgRef}
          src={previewData.src}
          alt="Preview"
          style={{ display: 'none', margin: '0 auto', maxWidth: '90vw', height: 'auto', cursor: 'zoom-in' }}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onClick={() => viewerRef.current?.show()}
        />
        <div className={styles.ImageTitle}>{previewData?.title}</div>
        <div className={styles.ImageDescription} style={{ textAlign: 'center' }}>{previewData?.description}</div>
        {showDisclaimer && <div className={styles.ImageDisclaimer}>Disclaimer: All photos are original photos as shot without any digital manipulation</div>}
      </div>
    </div>
  );
}
