'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import Image from "next/image";
import {useState} from "react";
import {GenericItemType} from "@/Types/types";
import {recentPaintingsCarouselEntries} from "@/assets/enhancedValues";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

export default function RecentPaintingsPage() {
  /** HOOKS **/
  const [selectedPainting, setSelectedPainting] = useState<GenericItemType>(recentPaintingsCarouselEntries[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPaintingHandler = (painting: GenericItemType) => {
    setSelectedPainting(painting);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPainting));
    // window.location.href = '/view';
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
  }

  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_bird.png" alt="Paintings" width={isMobile ? 32 : 72} height={isMobile ? 32 : 72}
          style={{marginRight: '8px', marginTop: '6px', marginBottom: '12px'}}
        />
        Recent Paintings
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: isMobile ? '100vw' : '95vw', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="recent-paintings" className="preview-canvas">
          <img
            src={selectedPainting?.src || '/images/paintings/img-001.jpg'}
            alt={selectedPainting?.title || "Paintings"}
            height={720}
            style={{marginBottom: '16px'}}
            onClick={viewPhotoHandler}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <div className={'ImageTitle'}>{selectedPainting.title}</div>
          <div className={'ImageDescription'}>{selectedPainting.description}</div>
          <SliderCarousel
            items={recentPaintingsCarouselEntries}
            showTitle={false}
            showDescription={false}
            showDots={!isMobile}
            showArrows={!isMobile}
            onSelect={selectPaintingHandler}
            style={{margin: '16px 0'}}
          />
        </div>
      </div>
      <PhotoViewer
        open={openPhotoViewer}
        onClose={closePhotoViewerHandler}
      />
    </div>
  );
}