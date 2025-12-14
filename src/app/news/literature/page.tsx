'use client'

import {useEffect} from "react";
import styles from '../NewsEvents.module.scss';
import Image from 'next/image';
import HomeLiterature from "@/components/Home/Literature/HomeLiterature";

export default function NewsEventsLiteraturePage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

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
      <div className={styles.NewsEntry} style={{marginTop: '32px'}}>
        <div className={styles.Title} style={{marginBottom: '32px'}}>
          <h2>
            <p>Collection of poems in Greek Language, published in 2021.</p>
            <p>(Armida publications - <a href="https://www.armidabooks.com/book/tagko-29/" target="_blank" rel="noopener noreferrer" style={{ color: 'tomato', textDecoration: 'none' }} aria-label="Open Tango 29 in new tab">🔗Tango 29</a>)</p>
          </h2>
        </div>
        <HomeLiterature />
      </div>
      <div className={styles.Line}></div>
      <div className={styles.NewsEntry} style={{marginTop: '32px'}}>
        <div className={styles.Title} style={{marginBottom: '32px'}}>
          <h2>
            <p>The overused unconsciousness of everyday life - Published in 2004</p>
          </h2>
        </div>
        <div className={styles.Content}>
          <div style={{margin: '16px auto'}}>
            <img
              src={'/images/news/paintings/book_03.jpg'}
              alt={' 18th February 2004 Nicosia'}
              width={isMobile ? 512 : 720}
            />
          </div>
        </div>
      </div>
    </div>
  );
}