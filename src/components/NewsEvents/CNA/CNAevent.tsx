'use client'

import {pushAnchor} from "@/utils/helpers";
import {GenericItemType} from "@/Types/types";
import {news01Entries} from "@/assets/enhancedValues";
import {useEffect, useState} from "react";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function CNAevent({showTitle = false} : { showTitle?: boolean}) {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(news01Entries[0]);

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;
  const getIndexForImage = (imageData: GenericItemType) =>
    news01Entries.findIndex(i => i.src === imageData.src);

  const selectPhotoHandler = (fashionItem: GenericItemType, push = true) => {
    setSelectedPhoto(fashionItem);
    const idx = getIndexForImage(selectedPhoto);
    if (push) {
      pushAnchor(`#cna-2019-item-${idx >= 0 ? idx : 'selected'}`);
    }
  }
  const viewPhotoHandler = () => {
    const idx = selectedPhoto ? getIndexForImage(selectedPhoto) : -1;
    pushAnchor(`#fashion-item-${idx >= 0 ? idx : 'none'}`);

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
          selectPhotoHandler(news01Entries[idx], false);
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
  return       <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
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
      {showTitle && <div className={'ImageTitle'}>{selectedPhoto.description}</div>}
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
  </div>;
}