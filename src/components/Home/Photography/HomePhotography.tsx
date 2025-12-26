'use client';

import {photographyCarouselFilenames} from "@/assets/enhancedValues";

import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function HomePhotography({dots = false}: { dots?: boolean }) {
  /** RENDER **/
  return <>
    <div id="home-photography" className="preview-canvas">
      <MediaCarousel
        items={photographyCarouselFilenames}
        showCanvas
        showTitle={true}
        showDescription={true}
        showDisclaimer
        showArrows
        showDots={dots}
        // onSelect={selectImageHandler}
        style={{margin: '16px 0'}}
      />
    </div>
  </>;
}