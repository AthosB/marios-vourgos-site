// src/components/Home/Fashion/HomeFashion.tsx
'use client';

import "./FashionCarousel.scss";
import "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel.scss"
import {fashionEntries} from '@/assets/enhancedValues';

import CustomEmblaCarouselFashion from "@/components/UI/CustomEmblaCarouselFashion/CustomEmblaCarouselFashion";

export default function HomeFashion() {
  /** PRES **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return <>
    <div id="home-fashion" className="preview-canvas FashionCarousel">
      <CustomEmblaCarouselFashion
        slides={fashionEntries}
        pageSize={5}
        showDots={!isMobile}
        dragFree={true}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
      />

    </div>
  </>;
}