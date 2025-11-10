'use client';

import styles from './PreviewCarousel.module.scss';

interface CarouselItemProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  video?: boolean;
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
  video = false,
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
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            width={width}
            height={height}
            style={{objectFit: "cover", marginTop: '1px'}}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (<img
          src={src}
          alt={alt}
          height={height}
          width={width}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />)}
      </div>
      <div className={styles.Title}>{title}</div>
      {(description && description.length > 0) && (<div className={styles.Description}>{description}</div>)}
    </div>
  );
}