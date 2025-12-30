import React, {useRef, useState} from "react";
import styles from './MediaCarouel.module.scss';
import {GenericItemType} from "@/Types/types";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

interface PreviewCanvasProps {
  mediaData: GenericItemType | null;
  isMobile?: boolean;
  showCanvas?: boolean;
}

export default function PreviewCanvas({
  mediaData,
  isMobile,
  showCanvas = false,
}: PreviewCanvasProps) {
  /** HOOKS **/
  const [openMediaViewer, setOpenMediaViewer] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  /** CONSTS **/
  const viewMediaHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(mediaData));
    setOpenMediaViewer(true);
  }

  const closeMdeiaViewerHandler = () => {
    setOpenMediaViewer(false);
  }

  /** RENDER **/
  if (mediaData && mediaData.src && mediaData.video) {
    return <div className={`${styles.PreviewCanvas}${isMobile ? ' ' + styles.Mobile : ''}`}>
      <video
        key={mediaData.src}
        ref={videoRef}
        src={mediaData.src}
        autoPlay
        loop
        muted
        playsInline
        width={isMobile ? '95%' : 'auto'}
        height={isMobile ? 'auto' : 720}
        style={{objectFit: "cover", marginTop: '6px', marginBottom: '8px'}}
        onClick={viewMediaHandler}
      >
        <source src={mediaData.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showCanvas ? (
        <PhotoViewer
          open={openMediaViewer}
          onClose={closeMdeiaViewerHandler}
        />
      ) : null}
    </div>;
  } else {
    return <div className={`${styles.PreviewCanvas}${isMobile ? ' ' + styles.Mobile : ''}`}>
      <div className={styles.PreviewImageWrapper}>
        <img
          src={mediaData?.src || ''}
          alt={mediaData?.title || 'Paintings'}
          height={isMobile ? undefined : 720}
          width={isMobile ? 'auto' : undefined}
          className={styles.PreviewImage}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
        <div
          className={styles.ImageShield}
          onClick={viewMediaHandler}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          onMouseDown={(e) => { if (e.button === 2) e.preventDefault(); }}
        />
      </div>
      {showCanvas ? (
        <PhotoViewer
          open={openMediaViewer}
          onClose={closeMdeiaViewerHandler}
        />
      ) : null}
    </div>;
  }
}