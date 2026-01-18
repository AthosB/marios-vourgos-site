// typescript
// src/components/Home/Literature/HomeLiterature.tsx
'use client';

import {literatureTango29Carousel} from "@/assets/enhancedValues";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function HomeLiterature() {
  /** PRES **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return (
    <div className="preview-canvas">
      <CustomEmblaCarousel
        slides={literatureTango29Carousel}
        thumbHeight={isMobile ? 100 : 150}
        pageSize={5}
        showDots={!isMobile}
        dragFree={false}
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
        </div>}
      />
    </div>
  );
}