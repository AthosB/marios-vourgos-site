'use client'

import styles from './newsPage.module.scss';
import '@/styles/generic-page.scss';
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_flower.png" alt="Flower" width={isMobile ? 16 : 32} height={isMobile ? 32 : 64}
          style={{marginRight: '12px', marginTop: '2px', marginBottom: '12px'}}
        />
        News & Events
      </div>
      <div className={'generic-items-page__line'}></div>
      <div className={styles.NewsPage}>
        <div className={styles.NewsEntry}>
          <div className={styles.EntryText}>
            <p>Art Exhibition and Charity Gala Dinner “The Achronic Remembrances of Time... a note not to forget the
              future...”
              Under the auspices of Cyprus President Mr. Nicos Anastasiades</p>
            <p>28th June 2019 - Old Limassol Port</p>
            <Link
              href="/news/CNA2019"
            >
              <div style={{width: '100%', textAlign: 'end'}}>more...</div>
            </Link>
          </div>
          <div className={styles.EntryPhoto}>
            <img
              src="/images/news/news01/news_01-01.jpg"
              alt="News 1-1"
              height={256}
              style={{display: 'block', maxWidth: '100%'}}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>
        <div className={styles.NewsEntry}>
          <div className={styles.EntryText}>
            <p>The Ecstatic Renaissance of Life
              Silks Gallery ~ Limassol </p>
          </div>
          <div className={styles.EntryPhoto}>
            <img
              src="/images/news/news_02-01.jpg"
              alt="News 1-1"
              height={256}
              style={{display: 'block', maxWidth: '100%'}}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}