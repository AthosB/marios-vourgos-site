'use client'

import {news01Entries} from "@/assets/enhancedValues";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function CNAevent() {

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;


  /** RENDER **/
  return       <div style={{width: '100%', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="cna-2019" className="preview-canvas">
      <MediaCarousel
        items={news01Entries}
        showCanvas
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        showArrows
        // onSelect={selectPhotoHandler}
        style={{margin: '16px 0'}}
      />
    </div>
  </div>;
}