// src/components/Home/Fashion/HomeFashion.tsx
'use client';

import {fashionEntries} from '@/assets/enhancedValues';

import CustomEmblaCarouselFashion from "@/components/UI/CustomEmblaCarouselFashion/CustomEmblaCarouselFashion";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

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
      {/*<DynamicCarousel*/}
      {/*  slides={fashionEntries}*/}
      {/*  showTitle={false}*/}
      {/*  showDescription={false}*/}
      {/*  showDisclaimer={false}*/}
      {/*/>*/}
    </div>
  </>;
}