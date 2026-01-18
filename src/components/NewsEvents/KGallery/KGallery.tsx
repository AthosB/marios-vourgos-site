'use client';

import {newsEventsPaintingsKGallery} from "@/assets/values";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function KGalleryModule() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="k-gallery" className="preview-canvas">
      <CustomEmblaCarousel
        slides={newsEventsPaintingsKGallery}
        pageSize={5}
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        dragFree={false}
      />
    </div>
  </div>;
}