'use client';

import {useState} from "react";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";
import PreviewCarousel from "@/components/PreviewCarousel/PreviewCarousel";
import {paintingsEntries} from "@/assets/values";

export default function HomePaintings() {
  /** HOOKS **/
  const [selectedPainting, setSelectedPainting] = useState<GenericItemType>({position: 1, src: '/images/paintings/img-001.jpg', alt: 'Painting 1', title: 'Eternity', description: 'Acrylics on canvas - 148 cm x 105 cm'});
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const selectPaintingHandler = (painting: GenericItemType) => {
    setSelectedPainting(painting);
  }

  const viewPhotoHandler = () => {
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
  }

  /** RENDER **/
  return <>
    <div style={{width:'100%',height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <img
        src={selectedPainting?.src || '/images/paintings/img-001.jpg'}
        alt={selectedPainting?.title || "Paintings"}
        height={720}
        style={{ marginBottom: '16px' }}
        onClick={viewPhotoHandler}
      />
      <div className={'ImageTitle'}>{selectedPainting.title}</div>
      <div className={'ImageDescription'}>{selectedPainting.description}</div>
      <PreviewCarousel items={paintingsEntries} onSelect={selectPaintingHandler}></PreviewCarousel>
    </div>
    <PhotoViewer
      photo={selectedPainting}
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}