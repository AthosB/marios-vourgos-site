'use client';

import {pressSilksGallery} from "@/assets/values";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function SilksGalleryModule() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="silks-gallery" className="preview-canvas">
      <CustomEmblaCarousel
        slides={pressSilksGallery}
        pageSize={5}
        showDots={!isMobile}
        dragFree={false}
        showTitle={false}
        showDescription={false}
      />
    </div>
  </div>;
}