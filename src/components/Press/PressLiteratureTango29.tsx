'use client';

import {useState} from "react";
import {GenericItemType} from "@/Types/types";
import {pressLiteratureTango29} from "@/assets/values";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

export default function PressLiteratureTango29Module() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType>(pressLiteratureTango29[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectPhotoHandler = (photoItem: GenericItemType) => {
    setSelectedPhoto(photoItem);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
    // window.location.href = '/view';
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
  }

  /** RENDER **/
  return <div style={{width: '100%', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
    <div id="press-tango-29" className="preview-canvas">
      <img
        src={selectedPhoto?.src || '/images/press/literature/press_tango29_020.jpg'}
        alt={selectedPhoto?.alt || "Tango 29"}
        height={720}
        style={{marginBottom: '16px'}}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onClick={viewPhotoHandler}
      />
      <SliderCarousel
        items={pressLiteratureTango29}
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        showArrows={!isMobile}
        onSelect={selectPhotoHandler}
        style={{margin: '16px 0'}}
      />
    </div>
    <PhotoViewer
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </div>;
}