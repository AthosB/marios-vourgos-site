// src/components/Home/Photography/HomePhotography.tsx
'use client';

import {photographyCarouselFilenames} from "@/assets/photographyValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function HomePhotography() {
  /** RENDER **/
  return <>
    <div id="home-photography" className="preview-canvas">
      <DynamicCarousel
        slides={photographyCarouselFilenames}
        showTitle={true}
        showDescription={true}
        showDisclaimer={true}
        />
    </div>
  </>;
}