'use client';

import {pressSilksGallery} from "@/assets/values";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function SilksGalleryModule() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="silks-gallery" className="preview-canvas">
      <MediaCarousel
        items={pressSilksGallery}
        showCanvas
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        showArrows
      />
    </div>
  </div>;
}