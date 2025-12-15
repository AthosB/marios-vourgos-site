'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import Image from "next/image";
import {useEffect, useState} from "react";
import {GenericItemType} from "@/Types/types";
import {recentPaintingsCarouselEntries} from "@/assets/enhancedValues";
import {useAnchorState} from "@/hooks/useAnchorState";
import {pushAnchor} from "@/utils/helpers";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function RecentPaintingsPage() {
  /** HOOKS **/
  const [selectedPainting, setSelectedPainting] = useState<GenericItemType>(recentPaintingsCarouselEntries[0]);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;
  const getIndexForImage = (imageData: GenericItemType) =>
    recentPaintingsCarouselEntries.findIndex(i => i.src === imageData.src);

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

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < recentPaintingsCarouselEntries.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectPaintingHandler(recentPaintingsCarouselEntries[idx], false);
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
    </div>
  );
}