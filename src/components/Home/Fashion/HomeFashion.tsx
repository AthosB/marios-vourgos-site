'use client';

import {useEffect, useState} from "react";
import { useAnchorState } from '@/hooks/useAnchorState';
import '@/styles/mario.scss';
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";
import PreviewCarousel from "@/components/PreviewCarousel/PreviewCarousel";
import {fashionEntries} from '@/assets/values';

import {pushAnchor} from "@/utils/helpers";

type imageType = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export default function HomeFashion({dots = false} : {dots?: boolean}) {
  /** HOOKS **/
  const [selectedFashion, setSelectedFashion] = useState<GenericItemType>(fashionEntries[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  useAnchorState();

  /** CONSTS **/
  const getIndexForImage = (imageData: imageType) =>
    fashionEntries.findIndex(i => i.src === imageData.src);

  const selectImageHandler = (imageData: imageType, push = true) => {
    setSelectedFashion(imageData);
    const idx = getIndexForImage(imageData);
    if (push) {
      pushAnchor(`#home-fashion-${idx >= 0 ? idx : 'selected'}`);
    }
  };

  const viewPhotoHandler = () => {
    const idx = selectedFashion ? getIndexForImage(selectedFashion) : -1;
    pushAnchor(`#home-fashion-view-${idx >= 0 ? idx : 'none'}`);

    localStorage.setItem('previewData', JSON.stringify(selectedFashion));
    window.location.href = '/view';
    // setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
    pushAnchor('#home-fashion');
  }

  /** EFFECTS **/
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseHashAndSelect = () => {
      try {
        const hash = window.location.hash || '';
        if (!hash) return;

        const photoMatch = hash.match(/^#home-fashion-(\d+)$/);
        const viewMatch = hash.match(/^#home-fashion-view-(\d+)$/);

        let idx: number | null = null;
        if (photoMatch) idx = Number(photoMatch[1]);
        else if (viewMatch) idx = Number(viewMatch[1]);

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < fashionEntries.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectImageHandler(fashionEntries[idx], false);
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
    <div id="home-fashion" className="preview-canvas">
      <img
        src={selectedFashion?.src || ''}
        alt={selectedFashion?.title || "Fashion"}
        height={720}
        style={{ marginBottom: '16px' }}
        onClick={viewPhotoHandler}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className={'ImageTitle'}>{selectedFashion?.title}</div>
      <div className={'ImageDescription'}>{selectedFashion?.description}</div>
      <PreviewCarousel
        items={fashionEntries}
        showTitle={false}
        showDots={dots}
        onSelect={selectImageHandler}
      />
    </div>
    <PhotoViewer
      photo={selectedFashion}
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}