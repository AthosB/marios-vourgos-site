'use client';

import {pressLiteratureTango29} from "@/assets/values";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function PressLiteratureTango29Module() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="press-tango-29" className="preview-canvas">
      <CustomEmblaCarousel
        slides={pressLiteratureTango29}
        pageSize={1}
        showDots={!isMobile}
        dragFree={false}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
      />
    </div>
  </div>;
}