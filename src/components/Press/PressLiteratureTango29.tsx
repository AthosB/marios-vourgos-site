'use client';

import {pressLiteratureTango29} from "@/assets/values";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function PressLiteratureTango29Module() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="press-tango-29" className="preview-canvas">
      <MediaCarousel
        items={pressLiteratureTango29}
        showCanvas
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        showArrows
      />
    </div>
  </div>;
}