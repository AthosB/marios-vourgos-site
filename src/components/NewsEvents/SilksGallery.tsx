'use client';

import {useState, useEffect} from "react";
import {useAnchorState} from '@/hooks/useAnchorState';
import {GenericItemType} from "@/Types/types";
import {pressSilksGallery} from "@/assets/values";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function SilksGalleryModule() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(pressSilksGallery[0]);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPhotoHandler = (photoItem: GenericItemType) => {
    setSelectedPhoto(photoItem);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
    // window.location.href = '/view';
  }

  /** EFFECTS **/
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseHashAndSelect = () => {
      try {
        const hash = window.location.hash || '';
        if (!hash) return;

        const photoMatch = hash.match(/^#silks-gallery-item-(\d+)$/);
        const viewMatch = hash.match(/^#silks-gallery-item-view-(\d+)$/);

        let idx: number | null = null;
        if (photoMatch) idx = Number(photoMatch[1]);
        else if (viewMatch) idx = Number(viewMatch[1]);

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < pressSilksGallery.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectPhotoHandler(pressSilksGallery[idx]);
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
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="silks-gallery" className="preview-canvas">
      <img
        src={selectedPhoto?.src || '/images/press/paintings/silksGallery/silks-gallery_001.jpg'}
        alt={selectedPhoto?.alt || "Silks Gallery"}
        height={720}
        style={{marginBottom: '16px'}}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onClick={viewPhotoHandler}
      />
      <SliderCarousel
        items={pressSilksGallery}
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