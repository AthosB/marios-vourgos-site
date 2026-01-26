'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import {news01Entries} from "@/assets/enhancedValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function RecentPaintingsPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        “The Achronic Remembrances of Time... a note not to forget the future...”
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="cna-2019" className="preview-canvas">
          <DynamicCarousel
            slides={news01Entries}
            showTitle={false}
            showDescription={false}
            showDisclaimer={false}
          />
        </div>
      </div>
    </div>
  );
}