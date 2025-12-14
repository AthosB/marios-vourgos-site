'use client'

import {useEffect} from "react";
import styles from '../pressPage.module.scss';
import Image from 'next/image';
import PressFashion from "@/components/Press/PressFashion";

export default function PressFashionPage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - Press - Fashion';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.PressSectionPage} style={{minHeight: 'calc(100vh - 260px)'}}>
      <div className={styles.NewsEntry}>
        <div className={styles.Header}>
          <Image
            src="/images/ornament_lips.png"
            alt="Photography"
            width={52}
            height={64}
            style={{marginRight: '8px', marginBottom: '12px'}}
          />
          Fashion Press Coverage
        </div>
        <div className={styles.Line}></div>
      </div>
      <div>
        <PressFashion />
      </div>
    </div>
  );
}