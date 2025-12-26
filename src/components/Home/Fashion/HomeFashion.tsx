// src/components/Home/Fashion/HomeFashion.tsx
'use client';

import '@/styles/mario.scss';
import {fashionEntries} from '@/assets/enhancedValues';
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function HomeFashion({dots = false} : {dots?: boolean}) {
  /** RENDER **/
  return <>
    <div id="home-fashion" className="preview-canvas">
      <MediaCarousel
        items={fashionEntries}
        showCanvas
        showTitle={false}
        showDescription={false}
        showArrows
        showDots={dots}
        style={{margin: '16px 0'}}
      />
    </div>
  </>;
}