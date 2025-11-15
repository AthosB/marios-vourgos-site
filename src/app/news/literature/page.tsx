'use client'

import {useEffect} from "react";
import styles from '../NewsEvents.module.scss';
import Image from 'next/image';

export default function NewsEventsLiteraturePage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - News & Events - Literature';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.NewsEventsPage}>
      <div className={styles.Header}>
        <Image src="/images/ornament_bird_2.png" alt="Paintings" width={64} height={46}
          style={{
            marginRight: '8px',
            marginBottom: '12px',
            transform: 'rotate(30deg)',
            transformOrigin: 'center'
          }}
        />
        Literature News & Events
      </div>
      <div className={styles.Line}></div>
    </div>
  );
}