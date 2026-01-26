'use client'

import {news01Entries} from "@/assets/enhancedValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function CNAevent() {

  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;


  /** RENDER **/
  return <div style={{width: '100%', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="cna-2019" className="preview-canvas">
      <DynamicCarousel
        slides={news01Entries}
        showTitle={false}
        showDescription={false}
        showDisclaimer={false}
      />
    </div>
  </div>;
}
