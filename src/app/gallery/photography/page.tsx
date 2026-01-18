"use client"

import {useEffect} from 'react';
import styles from './photography.module.scss';
import Image from 'next/image';
import HomePhotography from "@/components/Home/Photography/HomePhotography";

export default function PhotographyPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - Photography';
  }, []);

  /** RENDER **/
  return (
    <div className={`${styles.PhotographyPage}${isMobile ? ` ${styles.Mobile}` : ''}`}>
      <div className={styles.Header}>
        <Image src="/images/ornament_flower.png" alt="Photography" width={52} height={96}
          style={{marginRight: '8px', marginBottom: '12px'}}
        />
        Photography
      </div>
      <div className={styles.Line}></div>
      <HomePhotography />
    </div>
  );
}