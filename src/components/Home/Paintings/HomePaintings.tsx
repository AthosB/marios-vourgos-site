// src/components/Home/Paintings/HomePaintings.tsx
'use client';

import {paintingsCarousel} from "@/assets/enhancedValues";
import MediaCarousel2 from "@/components/UI/EmblaCarousel/MediaCarousel2";

export default function HomePaintings() {
  /** RENDER **/
  return <>
    <div id="home-paintings" className="preview-canvas">
      <MediaCarousel2
        slides={paintingsCarousel}
        options={{}}
        showTitle={true}
        showDescription={true}
        showDisclaimer={false}
      />
    </div>
  </>;
}
