"use client"

import styles from './photography.module.scss';
import Image from 'next/image';
import {photoFilenames} from '@/assets/values';
import PhotographyItem from "@/components/UI/PhotographyItem/PhotographyItem";

export default function PhotographyPage() {

  /** CONSTS **/
  const photographs = photoFilenames.map((photo, index) => (
    <div
      key={`photograph-key-${index}-${photo.src}`}
      className={styles.PhotoItem}
      style={{transform: `rotate(${Math.random() * 25 - 10}deg)`}}
    >
      <PhotographyItem
        photoSrc={photo.src}
        photoAlt={photo.alt}
        title={`Photography ${index + 1}`}
        description={photo.description as string || undefined}
        dimensions={{width: 600, height: 500}}
        elevated
      />
    </div>
  ));

  /** RENDER **/
  return (
    <div className={styles.PhotographyPage}>
      <div className={styles.Header}>
        <Image src="/images/ornament_bird.png" alt="Photography" width={72} height={72}
          style={{marginRight: '8px', marginBottom: '12px'}}
        />
        Photography
      </div>
      <div className={styles.Line}></div>
      <div className={`${styles.PhotographsContainer} ${styles.RandomRotate}`}>
        {photographs}
      </div>
    </div>
  );
}