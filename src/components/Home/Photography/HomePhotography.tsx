// src/components/Home/Photography/HomePhotography.tsx
'use client';

import {photographyCarouselFilenames} from "@/assets/enhancedValues";

import MediaCarousel2 from "@/components/UI/EmblaCarousel/MediaCarousel2";

export default function HomePhotography() {
  /** RENDER **/
  return <>
    <div id="home-photography" className="preview-canvas">
      <MediaCarousel2
        slides={photographyCarouselFilenames}
        options={{}}
        showTitle
        showDescription
        showDisclaimer={true}
      />
    </div>
  </>;
}