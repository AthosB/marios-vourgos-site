'use client'

import {useEffect} from "react";
import styles from '../pressPage.module.scss';
import Image from 'next/image';

export default function PressLiteraturePage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - Press - Literature';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.PressSectionPage} style={{minHeight: 'calc(100vh - 260px)'}}>
      <div className={styles.NewsEntry}>
        <div className={styles.Header}>
          <Image
            src="/images/ornament_bird_2.png"
            alt="Literature"
            width={72}
            height={40}
            style={{marginRight: '8px', marginBottom: '12px', transform: 'rotate(30deg)', transformOrigin: 'center'}}
          />
          Fashion Press Coverage
        </div>
        <div className={styles.Line}></div>
      </div>
    </div>
  );
}