'use client'

import {useEffect} from "react";
import styles from '../pressPage.module.scss';
import Image from 'next/image';

export default function PressPhotographyPage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - Press - Photography';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.PressSectionPage} style={{minHeight: 'calc(100vh - 260px)'}}>
      <div className={styles.NewsEntry}>
        <div className={styles.Header}>
          <Image src="/images/ornament_flower.png" alt="Photography" width={52} height={96}
            style={{marginRight: '8px', marginBottom: '12px'}}
          />
          Photography Press Coverage
        </div>
        <div className={styles.Line}></div>
        <div>
          <h2>In the process of coordinating with international galleries for upcoming exhibitions in 2026 - 2027</h2>
        </div>
      </div>
    </div>
  );
}