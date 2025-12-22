'use client'

import '@/styles/generic-page.scss';
import Image from "next/image";
import HomeLiterature from "@/components/Home/Literature/HomeLiterature";
import {useEffect, useState} from "react";
import {GenericItemType} from "@/Types/types";
import {news01Entries} from "@/assets/enhancedValues";
import {useAnchorState} from "@/hooks/useAnchorState";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

export default function LiteraturePage() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(news01Entries[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPhotoHandler = (literatureItem: GenericItemType) => {
    setSelectedPhoto(literatureItem);
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

        const photoMatch = hash.match(/^#home-paintings-(\d+)$/);
        const viewMatch = hash.match(/^#home-paintings-view-(\d+)$/);

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
        <Image
          src="/images/ornament_bird_2.png"
          alt="literature" width={72} height={54}
          style={{marginRight: '12px', marginBottom: '12px'}}
          onClick={viewPhotoHandler}
        />
        Literature
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: isMobile ? '100vw' : '95vw', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <HomeLiterature />
      </div>
      <PhotoViewer
        open={openPhotoViewer}
        onClose={closePhotoViewerHandler}
      />
    </div>
  );
}