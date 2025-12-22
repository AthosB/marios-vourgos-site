// src/components/Home/Fashion/HomeFashion.tsx
'use client';

import {useEffect, useState, useRef} from "react";
import { useAnchorState } from '@/hooks/useAnchorState';
import '@/styles/mario.scss';
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";
import {fashionEntries} from '@/assets/enhancedValues';

import {pushAnchor} from "@/utils/helpers";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

type imageType = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export default function HomeFashion({dots = false} : {dots?: boolean}) {
  /** PRES **/
  const isMobile = window.innerWidth <= 768;

  /** HOOKS **/
  const [selectedFashion, setSelectedFashion] = useState<GenericItemType>(fashionEntries[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
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
    // window.location.href = '/view';
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
    pushAnchor('#home-fashion');
  }

  useEffect(() => {
    if (!selectedFashion?.video) return;
    const v = videoRef.current;
    if (!v) return;
    try { v.load(); } catch { /* noop */ }
    v.play && v.play().catch(() => { /* autoplay may be blocked */ });
  }, [selectedFashion?.src, selectedFashion?.video]);

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

          // ensure the page scrolls to the anchor (retry if needed while React mounts)
          // offset 16 to place the target slightly higher
          // scrollToHash(window.location.hash || `#home-fashion-${idx}`, 16, true);
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
      {selectedFashion && selectedFashion.src && selectedFashion.video ? (
        <video
          key={selectedFashion.src}
          ref={videoRef}
          src={selectedFashion.src}
          autoPlay
          loop
          muted
          playsInline
          width={isMobile ? '95%' : 'auto'}
          height={isMobile ? 'auto' : 720}
          style={{objectFit: "cover", marginTop: '6px'}}
        >
          <source src={selectedFashion.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (<img
        src={selectedFashion?.src || ''}
        alt={selectedFashion?.title || "Fashion"}
        height={720}
        style={{ marginBottom: '16px' }}
        onClick={viewPhotoHandler}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />) }
      <SliderCarousel
        items={fashionEntries}
        showTitle={false}
        showDots={dots}
        onSelect={selectImageHandler}
        style={{margin: '16px 0'}}
      />
    </div>
    <PhotoViewer
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}