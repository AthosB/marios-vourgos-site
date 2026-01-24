// src/components/Home/Paintings/HomePaintings.tsx
'use client';

import {paintingsCarousel} from "@/assets/paintingsValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function HomePaintings() {
  /** RENDER **/
  return <>
    <div id="home-paintings" className="preview-canvas">
      <DynamicCarousel
        slides={paintingsCarousel}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
      />
    </div>
  </>;
}
