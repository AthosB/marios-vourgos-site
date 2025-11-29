'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import {useEffect, useState} from "react";
import {GenericItemType} from "@/Types/types";
import {newsEventsPaintings01Carousel} from "@/assets/values";
import {useAnchorState} from "@/hooks/useAnchorState";
import {pushAnchor} from "@/utils/helpers";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function RecentPaintingsPage() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(newsEventsPaintings01Carousel[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);
  useAnchorState();

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;
  const getIndexForImage = (imageData: GenericItemType) =>
    newsEventsPaintings01Carousel.findIndex(i => i.src === imageData.src);

  const selectPhotoHandler = (newsItem: GenericItemType, push = true) => {
    setSelectedPhoto(newsItem);
    const idx = getIndexForImage(selectedPhoto);
    if (push) {
      pushAnchor(`#cna-2019-item-${idx >= 0 ? idx : 'selected'}`);
    }
  }

  const viewPhotoHandler = () => {
    const idx = selectedPhoto ? getIndexForImage(selectedPhoto) : -1;
    pushAnchor(`#fashion-item-${idx >= 0 ? idx : 'none'}`);

    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
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

        if (idx !== null && !Number.isNaN(idx) && idx >= 0 && idx < newsEventsPaintings01Carousel.length) {
          // call the same handler used by PreviewCarousel so any selection logic runs
          selectPhotoHandler(newsEventsPaintings01Carousel[idx], false);
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
        “The Achronic Remembrances of Time... a note not to forget the future...”
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <div id="cna-2019" className="preview-canvas">
          <img
            src={selectedPhoto?.src || '/images/news/news01/news_01-01.jpg'}
            alt={selectedPhoto?.alt || "CNA 2019 Press"}
            height={720}
            style={{marginBottom: '16px'}}
            onClick={viewPhotoHandler}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
          {/*<div className={'ImageDescription'}>{selectedFashion.description}</div>*/}
          <SliderCarousel
            items={newsEventsPaintings01Carousel}
            showTitle={false}
            showDescription={false}
            showDots={!isMobile}
            showArrows={!isMobile}
            onSelect={(item: GenericItemType) => selectPhotoHandler(item)}
            style={{margin: '16px 0'}}
          />
          {/*<div*/}
          {/*  className={styles.CNA2019Carousel}*/}
          {/*  style={{*/}
          {/*    height: isMobile ? '96px' : '128px',*/}
          {/*  }}*/}
          {/*>*/}
          {/*  {*/}
          {/*    news01Entries.map((item, idx) => (*/}
          {/*      <div*/}
          {/*        key={idx}*/}
          {/*        className={styles.CNA2019CarouselItem}*/}
          {/*        style={{*/}
          {/*          height: isMobile ? '96px' : '128px'*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          src={item.src}*/}
          {/*          alt={item.title}*/}
          {/*          height={isMobile ? '96px !important' : 128}*/}
          {/*          width={'fit-content'}*/}
          {/*          onClick={() => selectPhotoHandler(item)}*/}
          {/*          onDragStart={(e) => e.preventDefault()}*/}
          {/*          draggable={false}*/}
          {/*          onContextMenu={(e) => e.preventDefault()}*/}
          {/*          style={{*/}
          {/*            cursor: 'pointer',*/}
          {/*            objectFit: 'contain',*/}
          {/*            boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',*/}
          {/*            transition: 'transform 0.3s ease-in-out',*/}
          {/*          }}*/}
          {/*        />*/}
          {/*      </div>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</div>*/}
        </div>
        <PhotoViewer
          photo={selectedPhoto}
          open={openPhotoViewer}
          onClose={closePhotoViewerHandler}
        />
      </div>
    </div>
  );
}