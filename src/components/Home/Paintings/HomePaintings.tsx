// src/components/Home/Paintings/HomePaintings.tsx
'use client';

import {paintingsCarousel} from "@/assets/enhancedValues";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function HomePaintings({dots = false} : {dots?: boolean}) {
  /** RENDER **/
  return <>
    <div id="home-paintings" className="preview-canvas">
      <MediaCarousel
        items={paintingsCarousel}
        showCanvas
        showTitle={true}
        showDescription={true}
        showArrows
        showDots={dots}
        style={{margin: '16px 0'}}
      />
    </div>
  </>;
}
