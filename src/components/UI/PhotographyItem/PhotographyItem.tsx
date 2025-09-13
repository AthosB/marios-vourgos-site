'use client';

import styles from './PhotographyItem.module.scss'

interface PhotographyItemProps {
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

export default function PhotographyItem({
  photoSrc = '',
  photoAlt = 'Photograph',
  title = 'Photograph Title',
  description,
  // width = 500,
  height = 300,
  // dimensions = {width: 500, height: 500},
  className = '',
  elevated = false,
  onClick,
}: PhotographyItemProps) {
  return (
    <div
      className={`${styles.PhotographyItem} ${className}`}
    >
      <div className={`${styles.Image}${elevated ? ` ${styles.Elevated}` : ''}`}
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
      >
        <img
          src={photoSrc}
          alt={photoAlt}
          height={height}
        />
      </div>
      <div className={styles.Title}>{title}</div>
      {(description && description.length > 0) && (<div className={styles.Description}>{description}</div>)}
    </div>
  );
}