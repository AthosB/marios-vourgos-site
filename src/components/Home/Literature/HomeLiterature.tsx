// typescript
// src/components/Home/Literature/HomeLiterature.tsx
'use client';

import {literatureTango29Carousel} from "@/assets/enhancedValues";
import {Button} from "@mui/material";
import styles from './HomeLiterature.module.scss';
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function HomeLiterature({dots = false} : {dots?: boolean}) {
  /** RENDER **/
  return (
    <div className="preview-canvas">
      <MediaCarousel
        items={literatureTango29Carousel}
        showCanvas
        showTitle={false}
        showDescription={false}
        showDisclaimer
        disclaimerText={<div className={'ImageTitle'}>
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
        showArrows
        showDots={dots}
        style={{margin: '16px 0'}}
      />
    </div>
  );
}