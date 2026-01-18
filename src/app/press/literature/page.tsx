'use client'

import {useEffect} from "react";
import styles from '../pressPage.module.scss';
import Image from 'next/image';
import PressLiteratureTango29Module from "@/components/Press/PressLiteratureTango29";

export default function PressLiteraturePage() {
  /** PRES **/
  const isMobile = window.innerWidth <= 950;

  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - Press - Literature';
  }, []);

  /** RENDER **/
  return (
    <div className={`${styles.PressSectionPage}${isMobile ? ' ' + styles.Mobile : ''}`} style={{minHeight: 'calc(100vh - 260px)'}}>
      <div className={styles.NewsEntry}>
        <div className={styles.Header}>
          <Image
            src="/images/ornament_bird_2.png"
            alt="Literature"
            width={72}
            height={40}
            style={{marginRight: '8px', marginBottom: '12px', transform: 'rotate(30deg)', transformOrigin: 'center'}}
          />
          Literature Press Coverage
        </div>
        <div className={styles.Line}></div>
      </div>
      <div>
        <PressLiteratureTango29Module />
      </div>
    </div>
  );
}