'use client'

import {useEffect} from "react";
import styles from '../NewsEvents.module.scss';
import Image from 'next/image';
import Link from "next/link";

export default function NewsEventsPaintingsPage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - News & Events - Paintings';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.NewsEventsPage}>
      <div className={styles.Header}>
        <Image src="/images/ornament_bird.png" alt="Paintings" width={52} height={64}
          style={{marginRight: '8px', marginBottom: '12px'}}
        />
        Paintings News & Events
      </div>
      <div className={styles.Line}></div>
      <div className={styles.NewsEntry} style={{marginTop: '32px'}}>
        <div className={styles.Title}>
          <h2><p>Art Exhibition and Charity Gala Dinner “The Achronic Remembrances of Time... a note not to forget the future...”</p><p>Under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port</p></h2>
        </div>
        <div className={styles.Content}>
          <div>
            <h2>Exhibition in the Press</h2>
          </div>
          <div>
            <Link
              href="/news/CNA2019"
            >
              <img
                src={'/images/news/paintings/newsEvent01/news_01-01.jpg'}
                alt={'28th June 2019 - Old Limassol Port '}
                width={512}
              />
            </Link>
            <Link
              href="/news/CNA2019"
            >
              <div style={{width: '100%', textAlign: 'end'}}>more...</div>
            </Link>
          </div>
          <div style={{marginTop: '16px'}}>
            <h2>Exhibition Gallery</h2>
          </div>
          <div>
            <Link
              href="/news/CNA2019"
            >
              <img
                src={'/images/news/paintings/newsEvent01B/news_01B-09.jpg'}
                alt={'28th June 2019 - Old Limassol Port '}
                width={512}
              />
            </Link>
            <Link
              href="/news/CNA2019"
            >
              <div style={{width: '100%', textAlign: 'end'}}>more...</div>
            </Link>
          </div>
          <div style={{marginTop: '16px'}}>
            <h2>Interview by the Cyprus News Agency</h2>
          </div>
          <div>
            <iframe width="512" height="315" src="https://www.youtube.com/embed/t8r5eeYGMnE?si=3PsqY0aY7cXNyTxe"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.NewsEntry} style={{marginTop: '16px'}}>
        <div className={styles.Title} style={{marginBottom: '32px'}}>
          <h2>
            <p>The Ecstatic Renaissance of Life</p><p>Silks Gallery - Limassol</p>
          </h2>
        </div>
        <div className={styles.Content}>
          <Link
            href="/news/CNA2019"
          >
            <img
              src={'/images/news/paintings/news_02-01.jpg'}
              alt={'Silks Gallery - Limassol'}
              width={512}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}