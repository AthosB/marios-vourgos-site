// src/components/Home/Paintings/HomePaintings.tsx
'use client';

import {paintingsCarousel} from "@/assets/paintingsValues";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function HomePaintings() {
  /** PRES **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return <>
    <div id="home-paintings" className="preview-canvas">
      <CustomEmblaCarousel
        slides={paintingsCarousel}
        thumbHeight={isMobile ? 100 : 150}
        pageSize={5}
        showDots={!isMobile}
        dragFree={false}
      />
    </div>
  </>;
}
