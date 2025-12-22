'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {GenericItemType} from "@/Types/types";
import {fashionEntries} from "@/assets/enhancedValues";
import {useAnchorState} from "@/hooks/useAnchorState";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function RecentPaintingsPage() {
  /** HOOKS **/
  const [selectedFashion, setSelectedFashion] = useState<GenericItemType>(fashionEntries[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPaintingHandler = (fashionItem: GenericItemType) => {
    setSelectedFashion(fashionItem);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedFashion));
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

        const photoMatch = hash.match(/^#home-paintings-(\d+)$/);
        const viewMatch = hash.match(/^#home-paintings-view-(\d+)$/);

        let idx: number | null = null;
        if (photoMatch) idx = Number(photoMatch[1]);
        else if (viewMatch) idx = Number(viewMatch[1]);

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < fashionEntries.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectPaintingHandler(fashionEntries[idx]);
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
        <Image src="/images/ornament_lips.png" alt="Fashion" width={isMobile ? 32 : 72} height={isMobile ? 32 : 72}
          style={{marginRight: '8px', marginTop: '6px', marginBottom: '12px'}}
        />
        Fashion
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: isMobile ? '100vw' : '95vw', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="recent-paintings" className="preview-canvas">
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
              onClick={viewPhotoHandler}
            >
              <source src={selectedFashion.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={selectedFashion?.src || '/images/paintings/img-001.jpg'}
              alt={selectedFashion?.title || "Paintings"}
              height={720}
              style={{marginBottom: '16px'}}
              onClick={viewPhotoHandler}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />) }
          <div className={'ImageTitle'}>{selectedFashion.title}</div>
          {/*<div className={'ImageDescription'}>{selectedFashion.description}</div>*/}
          <SliderCarousel
            items={fashionEntries}
            showTitle={false}
            showDescription={false}
            showDots={!isMobile}
            showArrows={!isMobile}
            onSelect={selectPaintingHandler}
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