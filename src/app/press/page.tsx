'use client';

import styles from './pressPage.module.scss';
import '@/styles/generic-page.scss';
import PressFashion from "@/components/Press/PressFashion";
import Image from "next/image";
import Link from "next/link";
import Spacer from "@/components/UI/Spacer";
import PressPaintings from "@/components/Press/PressPaintings";

export default function PressPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER */
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_bird.png" alt="Flower" width={isMobile ? 32 : 64} height={isMobile ? 32 : 64}
          style={{marginRight: '12px', marginTop: '2px', marginBottom: '12px'}}
        />
        Press
      </div>
      <div className={'generic-items-page__line'}></div>
      <div className={styles.PressPage}>
        <div className={'section-title'} style={{width: '100%'}}>Paintings</div>
        <div className={styles.PressEntry}>
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
        <div className={styles.PressEntry} style={{width: '100%', margin: '0 auto'}}>
          <div className={styles.EntryPhoto}>
            <iframe
              width="512"
              height="315"
              src="https://www.youtube.com/embed/t8r5eeYGMnE?si=3PsqY0aY7cXNyTxe"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.EntryText} style={{marginTop: '16px'}}>
            <h2>Interview by the Cyprus News Agency</h2>
          </div>
        </div>
        <div className={styles.PressEntry} style={{margin: '64px auto 16px auto'}}>
          <PressPaintings />
        </div>
        <Spacer height={128} width={'100%'} />
        <div className={'section-title'} style={{width: '100%'}}>Fashion</div>
        <PressFashion />
        <Spacer height={128} width={'100%'} />
        <div className={'section-title'} style={{width: '100%'}}>Literature</div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <img src={'/images/press/literature/tango29_critique.png'} alt={'Tango 29 - Critique'} width={720} />
        </div>
      </div>
    </div>
  );
}