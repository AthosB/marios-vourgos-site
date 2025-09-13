'use client';

import styles from './PaintingsItem.module.scss'

interface PaintingsItemProps {
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

export default function PaintingsItem({
  photoSrc = '',
  photoAlt = 'Painting',
  title = 'Painting Title',
  description,
  // width = 500,
  height = 300,
  // dimensions = {width: 500, height: 500},
  className = '',
  elevated = false,
  onClick,
}: PaintingsItemProps) {
  return (
    <div
      className={`${styles.PaintingsItem} ${className}`}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
    >
      <div className={`${styles.Image}${elevated ? ` ${styles.Elevated}` : ''}`}>
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