import styles from './FashionItem.module.scss';
import Image from 'next/image';

interface FashionItemProps {
  photoSrc: string;
  photoAlt?: string;
  title?: string;
  description?: string;
  dimensions?: { width: number; height: number | string };
  className?: string;
  elevated?: boolean;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
}

export default function FashionItem({
  photoSrc,
  photoAlt = 'Fashion Photo',
  title = 'Fashion Title',
  description,
  onClick,
}: FashionItemProps) {
  return (
    <div className={styles.FashionItem}>
      <div className={styles.Image} onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      >
        {photoSrc && <Image src={photoSrc} alt={photoAlt} height={420} />}
      </div>
      <div className={styles.Title}>{title}</div>
      {(description && description.length > 0) && (<div className={styles.Description}>{description}</div>)}
    </div>
  );
}