// src/components/Home/Fashion/HomeFashion.tsx
'use client';

import "./FashionCarousel.scss";
import "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel.scss"
import {fashionEntries} from '@/assets/enhancedValues';

import CustomEmblaCarouselFashion from "@/components/UI/CustomEmblaCarouselFashion/CustomEmblaCarouselFashion";

export default function HomeFashion() {
  /** RENDER **/
  return <>
    <div id="home-fashion" className="preview-canvas FashionCarousel">
      <CustomEmblaCarouselFashion
        slides={fashionEntries}
        pageSize={5}
        showDots={true}
        dragFree={true}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
      />

    </div>
  </>;
}