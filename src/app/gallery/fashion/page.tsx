'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import Image from "next/image";
import {fashionEntries} from "@/assets/enhancedValues";
import CustomEmblaCarouselFashion from "@/components/UI/CustomEmblaCarouselFashion/CustomEmblaCarouselFashion";

export default function RecentPaintingsPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_lips.png" alt="Fashion" width={isMobile ? 32 : 72} height={isMobile ? 32 : 72}
          style={{marginRight: '8px', marginTop: '6px', marginBottom: '12px'}}
        />
        Fashion
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: isMobile ? '100vw' : '95vw', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="recent-paintings" className="preview-canvas">
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