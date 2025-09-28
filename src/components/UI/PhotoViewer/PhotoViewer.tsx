import {useState, MouseEvent} from "react";
import Dialog from "@mui/material/Dialog";
import styles from "./PhotoViewer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface photoViewerProps {
  photo: { src: string; alt: string; title?: string; description?: string } | null;
  disclaimer?: string;
  open?: boolean;
  onClose?: () => void;
}

export default function PhotoViewer({
  photo = null,
  disclaimer = undefined,
  open = false,
  onClose = () => null
}: photoViewerProps) {
  /** HOOKS **/
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState({x: "50%", y: "50%"});

  /** CONSTS **/
  const closeModalHandler = () => {
    if (onClose) onClose();
  };

  const onImageClickHandler = (e: MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({x: `${x}%`, y: `${y}%`});
    setZoom(zoom === 1 ? 4 : 1);
  };

  console.log('disclaimer', disclaimer);

  /** RENDER **/
  return (
    <Dialog
      open={open}
      onClose={closeModalHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      // style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      fullScreen={true}
      className={styles.PhotoViewer}
    >
      <div className={styles.PhotoModalContent}>
        <div className={styles.CloseButton} onClick={closeModalHandler} title={'Close'}>
          <CloseIcon fontSize="large" />
        </div>
        {(photo && photo.src && photo.src.length > 0) && <Image
          src={photo?.src || ''}
          alt={photo?.alt || 'Photograph'}
          title={photo ? `Photography: ${photo.alt}` : 'Photograph'}
          width={500}
          height={300}
          style={{
            width: 'auto', height: '90vh', objectFit: 'contain',
            transform: `scale(${zoom})`,
            transformOrigin: `${origin.x} ${origin.y}`,
            transition: 'transform 0.3s',
            cursor: zoom === 1 ? 'zoom-in' : 'zoom-out'
          }}
          onClick={onImageClickHandler}
        />}
        <div className={styles.PhotoTitle}>{photo?.title}</div>
        <div className={styles.PhotoDescription}>{photo?.description}</div>
        <div className={styles.PhotoDisclaimer}>{disclaimer}</div>
      </div>
    </Dialog>
  );
}