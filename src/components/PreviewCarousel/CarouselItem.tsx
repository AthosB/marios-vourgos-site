'use client';

import styles from './PreviewCarousel.module.scss';

interface CarouselItemProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  disclaimer?: string;
  onClick?: () => void;
  height?: number | string;
  width?: number | string;
  elevated?: boolean;
  className?: string;
}

export default function CarouselItem({
  src = '',
  alt = '',
  title = '',
  description,
  onClick,
  height = 'auto',
  width = '100%',
  elevated = false,
  className = '',
}: CarouselItemProps) {

  return (
    <div className={`${styles.CarouselItem}${(className?.length > 0) ? ' ' + className : ''}`} onClick={() => {
      if (onClick) onClick();
    }}
    >
      <div className={`${styles.Image}${elevated ? ` ${styles.Elevated}` : ''}`}>
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
      </div>
      <div className={styles.Title}>{title}</div>
      {(description && description.length > 0) && (<div className={styles.Description}>{description}</div>)}
    </div>
  );
}