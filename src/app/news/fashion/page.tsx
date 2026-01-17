'use client'

import {useEffect} from "react";
import styles from "@/app/news/NewsEvents.module.scss";
import Image from "next/image";
import {fashionEntries} from "@/assets/enhancedValues";
import CustomEmblaCarouselFashion from "@/components/UI/CustomEmblaCarouselFashion/CustomEmblaCarouselFashion";

export default function NewsEventsFashionPage() {
  /** PRES **/
  const isMobile = window.innerWidth <= 768;

  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - News & Events - Fashion';
  }, []);
  
  /** RENDER **/
  return (
    <div className={`${styles.NewsEventsPage}${isMobile ? ` ${styles.Mobile}` : ''}`}>
      <div className={styles.Header}>
        <Image src="/images/ornament_lips.png" alt="Fashion" width={72} height={64}
          style={{
            marginRight: '8px',
            marginBottom: '12px',
            transform: 'rotate(-30deg)',
            transformOrigin: 'center'
          }}
        />
        Fashion News & Events
      </div>
      <div className={styles.Line}></div>
      <div className={styles.NewsEntry} style={{marginTop: '32px'}}>
        <div className={styles.Title} style={{marginBottom: '32px'}}>
          <h2><p>Marios Vourgos was designing under his own brand name Mario Marini Vourgos, based in New York and was showing his collections at New York Fashion Week between the years 1991 to 1993, prior to continuing his studies in finance and international relations at the University of Pennsylvania / Wharton Business school (ebdPhd).</p></h2>
        </div>
        <div id="home-fashion" className="preview-canvas">
          <CustomEmblaCarouselFashion
            slides={fashionEntries}
            showTitle={false}
            showDescription={false}
            showDisclaimer={false}
            showDots={!isMobile}
          />
        </div>
      </div>
    </div>
  );
}