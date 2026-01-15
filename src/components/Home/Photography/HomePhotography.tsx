// src/components/Home/Photography/HomePhotography.tsx
'use client';

import {photographyCarouselFilenames} from "@/assets/photographyValues";

import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function HomePhotography() {
  /** PRES **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return <>
    <div id="home-photography" className="preview-canvas">
      <CustomEmblaCarousel
        slides={photographyCarouselFilenames}
        thumbHeight={isMobile ? 100 : 150}
        pageSize={5}
        showDots={!isMobile}
        dragFree={false}
        showTitle={true}
        showDescription={true}
        showDisclaimer={true}
      />
    </div>
  </>;
}