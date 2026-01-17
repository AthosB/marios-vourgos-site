'use client'

import {news01Entries} from "@/assets/enhancedValues";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function CNAevent() {

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;


  /** RENDER **/
  return       <div style={{width: '100%', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="cna-2019" className="preview-canvas">
      <CustomEmblaCarousel
        slides={news01Entries}
        pageSize={5}
        showDots={!isMobile}
        dragFree={false}
        showTitle={false}
        showDescription={false}
      />
    </div>
  </div>;
}