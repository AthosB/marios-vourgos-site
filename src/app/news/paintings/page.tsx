'use client'

import {useEffect} from "react";
import styles from "@/app/news/NewsEvents.module.scss";
import Image from 'next/image';
import Link from "next/link";
import CNAevent from "@/components/NewsEvents/CNA/CNAevent";

export default function NewsEventsPaintingsPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - News & Events - Paintings';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.NewsEventsPage + (isMobile ? ` ${styles.Mobile}` : '')}>
      <div className={styles.Header}>
        <Image src="/images/ornament_bird.png" alt="Paintings" width={52} height={64}
          style={{marginRight: '8px', marginBottom: '12px'}}
        />
        Paintings News & Events
      </div>
      <div className={styles.Line}></div>
      <div className={styles.NewsEntry} style={{marginTop: '32px'}}>
        <div className={styles.Title}>
          <h2><p>Solo Art Exhibition and Charity Gala Dinner and titled “The Achronic Remembrances of Time... a note not to forget the future...”</p><p>Under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port</p></h2>
          <h2><p>Paintings were not for sale, and 30,000 euros were raised through the gala dinner for the charity foundation - One Dream, One Wish.</p></h2>
        </div>
        <div className={styles.Content}>
          <div style={{marginTop: '16px'}}>
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
            <div style={{width: '512px', fontStyle: 'italic'}}>Paintings were not for sale, and 30,000 euros were raised through the gala dinner for the charity foundation - One Dream, One Wish.</div>
          </div>
          <CNAevent />

        </div>
      </div>
      <div className={styles.NewsEntry} style={{marginTop: '16px'}}>
        <div className={styles.Title} style={{marginBottom: '32px'}}>
          <h2>
            <p>Solo Art Exhibition and titled &#34;The Ecstatic Renaissance of Life&#34;</p><p>Silks Gallery - 12th June 2009 Limassol</p>
          </h2>
        </div>
        <div className={styles.Content}>
          <img
            src={'/images/news/paintings/news_02-01.jpg'}
            alt={'Silks Gallery - Limassol'}
            width={512}
          />
        </div>
      </div>
    </div>
  );
}