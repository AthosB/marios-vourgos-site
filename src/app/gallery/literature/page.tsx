'use client'

import '@/styles/generic-page.scss';
import Image from "next/image";
import HomeLiterature from "@/components/Home/Literature/HomeLiterature";
import {useEffect, useState} from "react";
import {GenericItemType} from "@/Types/types";
import {news01Entries} from "@/assets/enhancedValues";
import {useAnchorState} from "@/hooks/useAnchorState";
import {pushAnchor} from "@/utils/helpers";

export default function LiteraturePage() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(news01Entries[0]);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;
  const getIndexForImage = (imageData: GenericItemType) =>
    news01Entries.findIndex(i => i.src === imageData.src);

  const selectPhotoHandler = (literatureItem: GenericItemType, push = true) => {
    setSelectedPhoto(literatureItem);
    const idx = getIndexForImage(selectedPhoto);
    if (push) {
      pushAnchor(`#cna-2019-item-${idx >= 0 ? idx : 'selected'}`);
    }
  }

  const viewPhotoHandler = () => {
    const idx = selectedPhoto ? getIndexForImage(selectedPhoto) : -1;
    pushAnchor(`#literature-item-${idx >= 0 ? idx : 'none'}`);

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

        const photoMatch = hash.match(/^#home-paintings-(\d+)$/);
        const viewMatch = hash.match(/^#home-paintings-view-(\d+)$/);

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
    </div>
  );
}