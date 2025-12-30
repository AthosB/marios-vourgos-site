'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import Image from "next/image";
import {previousPaintingsCarouselEntries} from "@/assets/enhancedValues";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function PreviousPaintingsPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;


  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_bird.png" alt="Paintings" width={isMobile ? 32 : 72} height={isMobile ? 32 : 72}
          style={{marginRight: '8px', marginTop: '6px', marginBottom: '12px'}}
        />
        Previous Paintings
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: isMobile ? '100vw' : '95vw', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="home-paintings" className="preview-canvas">
          <MediaCarousel
            items={previousPaintingsCarouselEntries}
            showCanvas
            showTitle={true}
            showDescription={true}
            showArrows
            showDots={!isMobile}
            style={{margin: '16px auto'}}
          />
        </div>
      </div>
    </div>
  );
}