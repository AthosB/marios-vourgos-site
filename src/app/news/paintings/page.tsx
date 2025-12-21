'use client'

import {useEffect} from "react";
import styles from "@/app/news/NewsEvents.module.scss";
import Image from 'next/image';

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
            <img
              src={'/images/news/paintings/newsEvent01B/news_01B-09.jpg'}
              alt={'28th June 2019 - Old Limassol Port'}
              width={512}
            />
          </div>
          <div style={{margin: '16px auto'}}>
            <img
              src={'/images/news/paintings/newsEvent01B/news_01B-36.jpg'}
              alt={'28th June 2019 - Old Limassol Port'}
              width={512}
            />
          </div>
          <div style={{margin: '16px auto',display: 'flex', flexDirection:'row', flexWrap:'wrap', gap: '16px'}}>
            <img
              src={'/images/news/paintings/newsEvent01B/news_01B-28.jpg'}
              alt={'28th June 2019 - Old Limassol Port'}
              width={isMobile ? 512 : 276}
            />
            <img
              src={'/images/news/paintings/newsEvent01B/news_01B-30.jpg'}
              alt={'28th June 2019 - Old Limassol Port'}
              width={isMobile ? 512 : 276}
            />
          </div>
          <div style={{margin: '16px auto'}}>
            <img
              src={'/images/news/news01/news_01-01.jpg'}
              alt={'The Achronic Remembrances of Time... a note not to forget the future...'}
              width={720}
            />
          </div>
        </div>
      </div>
      <div className={styles.NewsEntry} style={{marginTop: '16px'}}>
        <div className={styles.Title} style={{marginBottom: '32px'}}>
          <h2>
            <p>Solo Art Exhibition and titled &#34;The Ecstatic Renaissance of Life&#34;</p>
            <p>Silks Gallery - 12th June 2009 Limassol</p>
          </h2>
        </div>
        <div className={styles.Content}>
          <img
            src={'/images/news/paintings/SilksGallery/news-silks-gallery_01.jpg'}
            alt={' 18th February 2004 Nicosia'}
            width={isMobile ? 512 : 720}
            style={{marginBottom: '32px'}}
          />
          <img
            src={'/images/news/paintings/book_02.jpg'}
            alt={' 18th February 2004 Nicosia'}
            width={isMobile ? 512 : 360}
          />
        </div>
      </div>
      <div className={styles.NewsEntry} style={{marginTop: '32px'}}>
        <div className={styles.Title}>
          <h2><p>&#34;Solo art Exhibition and titled &#34;The overused unconsciousness of everyday life&#34;</p><p>K-Gallery - 18th February 2004 Nicosia</p></h2>
          <h2><p>Paintings were not for sale, and 30,000 euros were raised through the gala dinner for the charity foundation - One Dream, One Wish.</p></h2>
        </div>
        <div className={styles.Content}>
          <div style={{margin: '16px auto'}}>
            <img
              src={'/images/news/paintings/KGallery/k-gallery-front.jpg'}
              alt={' 18th February 2004 Nicosia'}
              width={isMobile ? 512 : 720}
            />
          </div>
          <div style={{marginTop: '16px'}}>
            <img
              src={'/images/news/paintings/book_03.jpg'}
              alt={' 18th February 2004 Nicosia'}
              width={isMobile ? 512 : 360}
            />
          </div>
        </div>
      </div>
    </div>
  );
}