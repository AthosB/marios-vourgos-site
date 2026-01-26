'use client';

import {newsEventsPaintingsKGallery} from "@/assets/values";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function KGalleryModule() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="k-gallery" className="preview-canvas">
      <DynamicCarousel
        slides={newsEventsPaintingsKGallery}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
      />
    </div>
  </div>;
}