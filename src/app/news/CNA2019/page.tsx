'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import {useEffect, useState} from "react";
import {GenericItemType} from "@/Types/types";
import {news01Entries} from "@/assets/enhancedValues";
import {useAnchorState} from "@/hooks/useAnchorState";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function RecentPaintingsPage() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(news01Entries[0]);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPhotoHandler = (fashionItem: GenericItemType) => {
    setSelectedPhoto(fashionItem);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
    window.location.href = '/view';
    // setOpenPhotoViewer(true);
  }

  /** EFFECTS **/
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseHashAndSelect = () => {
      try {
        const hash = window.location.hash || '';
        if (!hash) return;

        const photoMatch = hash.match(/^#news-cna-(\d+)$/);
        const viewMatch = hash.match(/^#news-cna-view-(\d+)$/);

        let idx: number | null = null;
        if (photoMatch) idx = Number(photoMatch[1]);
        else if (viewMatch) idx = Number(viewMatch[1]);

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < news01Entries.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectPhotoHandler(news01Entries[idx]);
        }
      } catch {
        // noop
      }
    };

    // initial run on mount
    parseHashAndSelect();

    // respond to back/forward and direct hash changes
    window.addEventListener('popstate', parseHashAndSelect);
    window.addEventListener('hashchange', parseHashAndSelect);

    return () => {
      window.removeEventListener('popstate', parseHashAndSelect);
      window.removeEventListener('hashchange', parseHashAndSelect);
    };
  }, []);

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
        {/*<PhotoViewer*/}
        {/*  photo={selectedPhoto}*/}
        {/*  open={openPhotoViewer}*/}
        {/*  onClose={closePhotoViewerHandler}*/}
        {/*/>*/}
      </div>
    </div>
  );
}