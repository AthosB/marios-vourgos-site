'use client'

import {useEffect} from "react";
import styles from '../NewsEvents.module.scss';
import Image from 'next/image';

export default function NewsEventsPhotographyPage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - News & Events - Photography';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.NewsEventsPage}>
      <div className={styles.NewsEntry}>
        <div className={styles.Header}>
          <Image src="/images/ornament_flower.png" alt="Photography" width={52} height={96}
            style={{marginRight: '8px', marginBottom: '12px'}}
          />
          Photography News & Events
        </div>
        <div className={styles.Line}></div>
        <div>
          <h2>2025 - Photography Event</h2>
        </div>
      </div>
    </div>
  );
}