'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import {useState} from "react";
import {GenericItemType} from "@/Types/types";
import {news01Entries} from "@/assets/enhancedValues";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

export default function RecentPaintingsPage() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(news01Entries[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPhotoHandler = (fashionItem: GenericItemType) => {
    setSelectedPhoto(fashionItem);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
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
        “The Achronic Remembrances of Time... a note not to forget the future...”
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="cna-2019" className="preview-canvas">
          <img
            src={selectedPhoto?.src || '/images/news/cna2019/news_01-01.jpg'}
            alt={selectedPhoto?.title || "CNA 2019"}
            height={720}
            style={{marginBottom: '16px'}}
            onClick={viewPhotoHandler}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          <div className={'ImageTitle'}>{selectedPhoto.description}</div>
          <SliderCarousel
            items={news01Entries}
            showTitle={false}
            showDescription={false}
            showDots={!isMobile}
            showArrows={!isMobile}
            onSelect={selectPhotoHandler}
            style={{margin: '16px 0'}}
          />
        </div>
        <PhotoViewer
          open={openPhotoViewer}
          onClose={closePhotoViewerHandler}
        />
      </div>
    </div>
  );
}