'use client';

import styles from './PhotographyItem.module.scss'
import Image from 'next/image'

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
	                                        width = 500,
	                                        height = 300,
	                                        // dimensions = {width: 500, height: 500},
	                                        className = '',
	                                        elevated = false,
	                                        onClick,
}: PhotographyItemProps) {
  return (
    <div
      className={`${styles.PhotographyItem} ${className}`}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
    >
      <div className={`${styles.Image}${elevated ? ` ${styles.Elevated}` : ''}`}>
        <img
          src={photoSrc}
          // width={dimensions.width}
          // height={dimensions.height as number}
          alt={photoAlt}
          // style={{
          // 	width: '100%',
          // 	height: 'auto',
          // }}
          // width={width}
          height={height}
          // placeholder="blur"
        />
      </div>
      <div className={styles.Title}>{title}</div>
      {(description && description.length > 0) && (<div className={styles.Description}>{description}</div>)}
      {/*<div className={styles.Dimensions}>*/}
      {/*  {dimensions.width} x {dimensions.height} cm*/}
      {/*</div>*/}
    </div>
  );
}