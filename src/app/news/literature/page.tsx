'use client'

import {useEffect} from "react";
import styles from '../NewsEvents.module.scss';
import Image from 'next/image';
import {literatureTango29Carousel} from "@/assets/enhancedValues";
import {Button} from "@mui/material";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function NewsEventsLiteraturePage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - News & Events - Literature';
  }, []);

  /** RENDER **/
  return (
    <div className={`${styles.NewsEventsPage}${isMobile ? ` ${styles.Mobile}` : ''}`}>
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
        <div className="preview-canvas">
          <CustomEmblaCarousel
            slides={literatureTango29Carousel}
            showTitle={false}
            showDescription={false}
            showDisclaimer={true}
            disclaimer={<div className={'ImageTitle'}>
              <p style={{textAlign: 'center', margin: '16px auto 0 auto', maxWidth: '80vw'}}>
                The medieval castle was transformed into a modern stage, with live theatrical characters and visual
                installations, where attendees watched the verses from Marios Vourgos’ poetry collection “Tango 29” come
                to life through a group of acclaimed artists, under the direction of theatre director Elena Sokratous.
              </p>
              <p style={{color: '#fff', fontSize: '1.2rem', fontWeight: 500, textAlign: 'center', marginTop: '16px'}}>
                Marios Vourgos donated all proceeds from the sale of books to the One Dream One Wish charity foundation. (for children with cancer).
              </p>
              <div className={styles.Action}>
                <a
                  href={'https://www.tango29.eu/'}
                  target="_blank"
                  rel={'noreferrer'}
                  style={{margin: '0 auto'}}
                  title="Tango 29 (opens in a new tab)"
                >
                  <Button
                    variant="contained"
                    color="warning"
                  >
                    More
                  </Button>
                </a>
              </div>
            </div>}
            showDots={!isMobile}
          />
        </div>
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