'use client';

import styles from './PreviewCarousel.module.scss';

interface CarouselItemProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  height?: number;
  width?: number;
  elevated?: boolean;
}

export default function CarouselItem({
  src = '',
  alt = '',
  title = '',
  description,
  onClick,
  height = 300,
  elevated = false
}: CarouselItemProps) {
  return (
    <div className={styles.CarouselItem} onClick={() => {
      if (onClick) onClick();
    }}
    >
      <div className={`${styles.Image}${elevated ? ` ${styles.Elevated}` : ''}`}>
        <img
          src={src}
          alt={alt}
          height={height}
        />
      </div>
      <div className={styles.Title}>{title}</div>
      {(description && description.length > 0) && (<div className={styles.Description}>{description}</div>)}
    </div>
  );
}