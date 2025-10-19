'use client';

import {useState} from "react";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";
import PreviewCarousel from "@/components/PreviewCarousel/PreviewCarousel";
import {paintingsCarousel} from "@/assets/values";

export default function HomePaintings({dots = false} : {dots?: boolean} ) {
  /** HOOKS **/
  const [selectedPainting, setSelectedPainting] = useState<GenericItemType>(paintingsCarousel[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const selectPaintingHandler = (painting: GenericItemType) => {
    setSelectedPainting(painting);
  }

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPainting));
    window.location.href = '/view';
    // setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
  }

  /** RENDER **/
  return <>
    <div className="preview-canvas">
      <img
        src={selectedPainting?.src || '/images/paintings/img-001.jpg'}
        alt={selectedPainting?.title || "Paintings"}
        height={720}
        style={{marginBottom: '16px'}}
        onClick={viewPhotoHandler}
      />
      <div className={'ImageTitle'}>{selectedPainting.title}</div>
      <div className={'ImageDescription'}>{selectedPainting.description}</div>
      <PreviewCarousel
        items={paintingsCarousel}
        showTitle={false}
        showDescription={false}
        showDots={dots}
        onSelect={selectPaintingHandler}
      />
    </div>
    <PhotoViewer
      photo={selectedPainting}
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}