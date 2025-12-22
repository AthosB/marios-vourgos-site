// typescript
// src/components/Home/Literature/HomeLiterature.tsx
'use client';

import {literatureTango29Carousel} from "@/assets/enhancedValues";
import {Button} from "@mui/material";
import styles from './HomeLiterature.module.scss';
import {pushAnchor} from "@/utils/helpers";
import {GenericItemType} from "@/Types/types";
import {useState, useEffect} from "react";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

export default function HomeLiterature() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType | null>(literatureTango29Carousel[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : true;

  const viewPhotoHandler = (imageData: GenericItemType) => {
    pushAnchor(`#home-literature-view-${imageData.title}`);

    const previewData = {
      src: imageData.src,
      alt: imageData.title,
      title: imageData.title,
      description: imageData.description ? imageData.description : '',
    }

    localStorage.setItem('previewData', JSON.stringify(previewData));
    // window.location.href = '/view';
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
    pushAnchor('#home-literature');
  }

  const getIndexForImage = (photoData: GenericItemType) =>
    literatureTango29Carousel.findIndex(i => i.src === photoData.src);

  const selectPhotoHandler = (photoData: GenericItemType, push = true) => {
    setSelectedPhoto(photoData);
    const idx = getIndexForImage(photoData);
    if (push) {
      // corrected anchor to reference home-literature
      pushAnchor(`#home-literature-${idx >= 0 ? idx : 'selected'}`);
    }
  };

  /** Restore selection + scroll on mount / back/forward */
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parseHashAndSelect = () => {
      try {
        const hash = window.location.hash || '';
        if (!hash) return;

        const photoMatch = hash.match(/^#home-literature-(\d+)$/);
        const viewMatch = hash.match(/^#home-literature-view-(.+)$/);

        let idx: number | null = null;
        if (photoMatch) {
          idx = Number(photoMatch[1]);
        } else if (viewMatch) {
          const title = decodeURIComponent(viewMatch[1]);
          const found = literatureTango29Carousel.findIndex(i => i.title === title);
          if (found >= 0) idx = found;
        }

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < literatureTango29Carousel.length) {
          // select the item without pushing a new anchor
          setSelectedPhoto(literatureTango29Carousel[idx]);

          // ensure the page scrolls to the anchor (retry if needed while React mounts)
          // scrollToHash(window.location.hash || `#home-literature-${idx}`, 0, true);
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
    <div className="preview-canvas">
      <img
        // src="/images/literature/tango-1.jpg"
        src={selectedPhoto?.src || '/images/literature/tango29/carousel/tango-kolossi-01.jpg'}
        alt="Tango 29"
        height={430}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onClick={() => viewPhotoHandler(selectedPhoto as GenericItemType)}
      />
      <div className={'ImageTitle'}>
        <p>
          The medieval castle was transformed into a modern stage, with live theatrical characters and visual
          installations, where attendees watched the verses from Marios Vourgos’ poetry collection “Tango 29” come
          to life through a group of acclaimed artists, under the direction of theatre director Elena Sokratous.
        </p>
        <p style={{color: '#fff', fontSize: '1.2rem', fontWeight: 500, textAlign: 'center', marginTop: '16px'}}>
          Marios Vourgos donated all proceeds from the sale of books to the One Dream One Wish charity foundation. (for children with cancer).
        </p>
        <div className={styles.Action}>
          <a
            href={'https://www.tango29.eu/'}
            target="_blank"
            rel={'noreferrer'}
            style={{margin: '0 auto'}}
            title="Tango 29 (opens in a new tab)"
          >
            <Button
              variant="contained"
              color="warning"
            >
              More
            </Button>
          </a>
        </div>
      </div>
      <SliderCarousel
        items={literatureTango29Carousel}
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        showArrows={!isMobile}
        onSelect={selectPhotoHandler}
        style={{margin: '16px 0'}}
      />
      <PhotoViewer
        open={openPhotoViewer}
        onClose={closePhotoViewerHandler}
      />
    </div>
  );
}