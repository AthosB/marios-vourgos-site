'use client'

import {useEffect} from "react";
import styles from '../pressPage.module.scss';
import Image from 'next/image';

export default function PressPaintingsPage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - Press - Paintings';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.PressSectionPage} style={{minHeight: 'calc(100vh - 260px)'}}>
      <div className={styles.NewsEntry}>
        <div className={styles.Header}>
          <Image src="/images/ornament_bird.png" alt="Photography" width={52} height={64}
            style={{marginRight: '8px', marginBottom: '12px'}}
          />
          Paintings Press Coverage
        </div>
        <div className={styles.Line}></div>
      </div>
    </div>
  );
}