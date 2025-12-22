'use client';

import {useState, useEffect} from "react";
import {useAnchorState} from '@/hooks/useAnchorState';
import {GenericItemType} from "@/Types/types";
import {pressLiteratureTango29} from "@/assets/values";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

export default function PressLiteratureTango29Module() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(pressLiteratureTango29[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPhotoHandler = (photoItem: GenericItemType) => {
    setSelectedPhoto(photoItem);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
    // window.location.href = '/view';
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
  }

  /** EFFECTS **/
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseHashAndSelect = () => {
      try {
        const hash = window.location.hash || '';
        if (!hash) return;

        const photoMatch = hash.match(/^#press-tango-29-item-(\d+)$/);
        const viewMatch = hash.match(/^#press-tango-29-item-view-(\d+)$/);

        let idx: number | null = null;
        if (photoMatch) idx = Number(photoMatch[1]);
        else if (viewMatch) idx = Number(viewMatch[1]);

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < pressLiteratureTango29.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectPhotoHandler(pressLiteratureTango29[idx]);
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
    <div id="press-tango-29" className="preview-canvas">
      <img
        src={selectedPhoto?.src || '/images/press/literature/press_tango29_020.jpg'}
        alt={selectedPhoto?.alt || "Tango 29"}
        height={720}
        style={{marginBottom: '16px'}}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onClick={viewPhotoHandler}
      />
      <SliderCarousel
        items={pressLiteratureTango29}
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
  </div>;
}