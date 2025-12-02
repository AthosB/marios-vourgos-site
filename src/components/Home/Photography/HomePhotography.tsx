'use client';

import {useState, useEffect} from "react";
import { useAnchorState } from '@/hooks/useAnchorState';
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

import {photographyCarouselFilenames} from "@/assets/enhancedValues";

import {pushAnchor} from "@/utils/helpers";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

type imageType = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export default function HomePhotography({dots = false}: { dots?: boolean }) {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<imageType | null>(photographyCarouselFilenames[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  useAnchorState();

  /** CONSTS **/
  const getIndexForImage = (imageData: imageType) =>
    photographyCarouselFilenames.findIndex(i => i.src === imageData.src);

  /**
   * selectImageHandler
   * - `push` defaults to true so normal user interactions add a history entry
   * - when restoring from the URL/hash we call with `push = false` to avoid duplicating history
   */
  const selectImageHandler = (imageData: imageType, push = true) => {
    setSelectedPhoto(imageData);
    const idx = getIndexForImage(imageData);
    if (push) {
      pushAnchor(`#home-photography-${idx >= 0 ? idx : 'selected'}`);
    }
  };

  const viewPhotoHandler = () => {
    const idx = selectedPhoto ? getIndexForImage(selectedPhoto) : -1;
    pushAnchor(`#home-photography-view-${idx >= 0 ? idx : 'none'}`);

    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
    window.location.href = '/view';
    // setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
    pushAnchor('#home-photography');
  }

  /** EFFECTS **/
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseHashAndSelect = () => {
      try {
        const hash = window.location.hash || '';
        if (!hash) return;

        const photoMatch = hash.match(/^#home-photography-(\d+)$/);
        const viewMatch = hash.match(/^#home-photography-view-(\d+)$/);

        let idx: number | null = null;
        if (photoMatch) idx = Number(photoMatch[1]);
        else if (viewMatch) idx = Number(viewMatch[1]);

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < photographyCarouselFilenames.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectImageHandler(photographyCarouselFilenames[idx], false);
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
    <div id="home-photography" className="preview-canvas">
      <img
        src={selectedPhoto?.src || '/images/home-photography-first.JPG'}
        alt={selectedPhoto?.title || "Photography"}
        width={360}
        style={{marginBottom: '16px'}}
        onClick={viewPhotoHandler}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className={'ImageTitle'}>{selectedPhoto?.title}</div>
      <div className={'ImageDescription'}>{selectedPhoto?.description}</div>
      <div className={'ImageDisclaimer'}>Disclaimer: All photos are original photos as shot without any digital
        manipulation
      </div>
      <SliderCarousel
        items={photographyCarouselFilenames}
        showTitle={false}
        showDescription={false}
        showDots={dots}
        onSelect={selectImageHandler}
        style={{margin: '16px 0'}}
      />
    </div>
    <PhotoViewer
      photo={selectedPhoto}
      disclaimer={'Disclaimer: All photos are original photos as shot without any digital manipulation'}
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}