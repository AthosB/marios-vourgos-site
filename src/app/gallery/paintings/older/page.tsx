'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import Image from "next/image";
import {olderPaintingsCarouselEntries} from "@/assets/paintingsValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function OlderPaintingsPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_bird.png" alt="Paintings" width={isMobile ? 32 : 72} height={isMobile ? 32 : 72}
               style={{marginRight: '8px', marginTop: '6px', marginBottom: '12px'}}
        />
        Older Work
      </div>
      <div className={'generic-items-page__line'}></div>
      <div className="preview-canvas">
        <DynamicCarousel
          slides={olderPaintingsCarouselEntries}
          showTitle={true}
          showDescription={true}
          showDisclaimer={false}
        />
      </div>
    </div>
  );
}