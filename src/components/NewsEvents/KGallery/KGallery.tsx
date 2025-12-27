'use client';

import {newsEventsPaintingsKGallery} from "@/assets/values";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function KGalleryModule() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="k-gallery" className="preview-canvas">
      <MediaCarousel
        items={newsEventsPaintingsKGallery}
        showCanvas
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        showArrows
      />
    </div>
  </div>;
}