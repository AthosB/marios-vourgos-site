// src/components/Home/Paintings/HomePaintings.tsx
'use client';

import {useState, useEffect} from "react";
import { useAnchorState } from '@/hooks/useAnchorState';
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";
import {paintingsCarousel} from "@/assets/enhancedValues";
import {pushAnchor} from "@/utils/helpers";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function HomePaintings({dots = false} : {dots?: boolean}) {
  /** HOOKS **/
  const [selectedPainting, setSelectedPainting] = useState<GenericItemType>(paintingsCarousel[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  useAnchorState();

  /** CONSTS **/
  const getIndexForImage = (imageData: GenericItemType) =>
    paintingsCarousel.findIndex(i => i.src === imageData.src);

  const selectPaintingHandler = (painting: GenericItemType, push = true) => {
    setSelectedPainting(painting);
    const idx = getIndexForImage(selectedPainting);
    if (push) {
      pushAnchor(`#home-paintings-${idx >= 0 ? idx : 'selected'}`);
    }
  }

  const viewPhotoHandler = () => {
    const idx = selectedPainting ? getIndexForImage(selectedPainting) : -1;
    pushAnchor(`#home-paintings-view-${idx >= 0 ? idx : 'none'}`);

    localStorage.setItem('previewData', JSON.stringify(selectedPainting));
    window.location.href = '/view';
    // setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
    pushAnchor('#home-paintings');
  }

  /** EFFECTS **/
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseHashAndSelect = () => {
      try {
        const hash = window.location.hash || '';
        if (!hash) return;

        const photoMatch = hash.match(/^#home-paintings-(\d+)$/);
        const viewMatch = hash.match(/^#home-paintings-view-(\d+)$/);

        let idx: number | null = null;
        if (photoMatch) idx = Number(photoMatch[1]);
        else if (viewMatch) idx = Number(viewMatch[1]);

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < paintingsCarousel.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectPaintingHandler(paintingsCarousel[idx], false);

          // ensure the page scrolls to the anchor (retry if needed while React mounts)
          // scrollToHash(window.location.hash || `#home-paintings-${idx}`, 0, true);
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
  return <>
    <div id="home-paintings" className="preview-canvas">
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
        items={paintingsCarousel}
        showTitle={false}
        showDescription={false}
        showDots={dots}
        onSelect={selectPaintingHandler}
        style={{margin: '16px 0'}}
      />
    </div>
    <PhotoViewer
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}
