'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import Image from "next/image";
import {previousPaintingsCarouselEntries} from "@/assets/paintingsValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function PreviousPaintingsPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;


  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_bird.png" alt="Paintings" width={isMobile ? 32 : 72} height={isMobile ? 32 : 72}
          style={{marginRight: '8px', marginTop: '6px', marginBottom: '12px'}}
        />
        Previous Work
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: isMobile ? '100vw' : '95vw', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="home-paintings" className="preview-canvas">
          <DynamicCarousel
            slides={previousPaintingsCarouselEntries}
            showTitle={true}
            showDescription={true}
            showDisclaimer={false}
          />
        </div>
      </div>
    </div>
  );
}