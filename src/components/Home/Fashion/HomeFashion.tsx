// src/components/Home/Fashion/HomeFashion.tsx
'use client';

import {fashionEntries} from '@/assets/enhancedValues';

import CustomEmblaCarouselFashion from "@/components/UI/CustomEmblaCarouselFashion/CustomEmblaCarouselFashion";
import DesktopCarouselFashion from "@/components/UI/CustomEmblaCarouselFashion/DesktopCarouselFashion";

export default function HomeFashion() {
  /** PRES **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return <>
    <div id="home-fashion" className="preview-canvas FashionCarousel">
      {isMobile ? <CustomEmblaCarouselFashion
        slides={fashionEntries}
        pageSize={3}
        showDots={!isMobile}
        dragFree={true}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
      /> : <DesktopCarouselFashion
        slides={fashionEntries}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
        showDots={true}
        dragFree={false}
        pageSize={5}
      />
      }
      {/*<DynamicCarousel*/}
      {/*  slides={fashionEntries}*/}
      {/*  showTitle={false}*/}
      {/*  showDescription={false}*/}
      {/*  showDisclaimer={false}*/}
      {/*/>*/}
    </div>
  </>;
}