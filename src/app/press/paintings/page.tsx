'use client'

import {useEffect} from "react";
import styles from '../pressPage.module.scss';
import Image from 'next/image';
import KGalleryModule from "@/components/NewsEvents/KGallery/KGallery";
import SilksGalleryModule from "@/components/NewsEvents/SilksGallery";
import CNAevent from "@/components/NewsEvents/CNA/CNAevent";

export default function PressPaintingsPage() {
  /** EFFECTS **/
  useEffect(() => {
    document.title = 'Marios Vourgos - Press - Paintings';
  }, []);

  /** RENDER **/
  return (
    <div className={styles.PressSectionPage} style={{minHeight: 'calc(100vh - 260px)'}}>
      <div className={styles.NewsEntry}>
        <div className={styles.Header}>
          <Image src="/images/ornament_bird.png" alt="Photography" width={52} height={64}
            style={{marginRight: '8px', marginBottom: '12px'}}
          />
          Paintings Press Coverage
        </div>
        <div className={styles.Line}></div>
        <div className={styles.PressEntry}>
          <div className={styles.Title}>
            <h2><p>Solo Art Exhibition and Charity Gala Dinner and titled &#34;The Achronic Remembrances of Time... a note not to forget the future...&#34;</p>
              <p>28th June 2019 - Old Limassol Port</p></h2>
          </div>
          <div className={styles.Content}>
            <CNAevent />
          </div>
        </div>
        <div className={styles.PressEntry}>
          <div className={styles.Title}>
            <h2>
              <p>Solo Art Exhibition and titled &#34;The Ecstatic Renaissance of Life&#34;</p><p>Silks Gallery - 12th June 2009 Limassol</p>
            </h2>
          </div>
          <div className={styles.Content}>
            <SilksGalleryModule />
          </div>
        </div>
        <div className={styles.PressEntry}>
          <div className={styles.Title}>
            <h2><p>Solo art Exhibition and titled &#34;The overused unconsciousness of everyday life&#34;</p>
              <p>K-Gallery - 18th February 2004 Nicosia</p></h2>
          </div>
          <div className={styles.Content}>
            <KGalleryModule />
          </div>
        </div>
      </div>
    </div>
  );
}