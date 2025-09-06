import Dialog from "@mui/material/Dialog";
import styles from "./PhotoViewer.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface photoViewerProps {
	photo: { src: string; alt: string; title?: string; description?: string } | null;
	open?: boolean;
	onClose?: () => void;
}

export default function PhotoViewer({
	                                    photo = null,
	                                    open = false,
	                                    onClose = () => null
}: photoViewerProps) {

  /** CONSTS **/
  const closeModalHandler = () => {
    if (onClose) onClose();
  };

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
          style={{width: 'auto', height: '90vh', objectFit: 'contain'}}
        />}
        <div className={styles.PhotoTitle}>{photo?.title}</div>
        <div className={styles.PhotoDescription}>{photo?.description}</div>
      </div>
    </Dialog>
  );
}