'use client';

import {useState} from "react";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";
import PreviewCarousel from "@/components/PreviewCarousel/PreviewCarousel";
import {fashionEntries} from '@/assets/values';

type imageType = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export default function HomeFashion() {
  /** HOOKS **/
  const [selectedFashion, setSelectedFashion] = useState<GenericItemType>({position: 1, src: '/images/fashion/fashion_07.jpg', alt: 'Fashion 1', title: 'Fashion 1', description: ''});
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const selectImageHandler = (imageData: imageType) => {
    // console.log("Selected image: ", imagePath);
    setSelectedFashion(imageData);
  };

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
        src={selectedFashion?.src || ''}
        alt={selectedFashion?.title || "Fashion"}
        height={720}
        style={{ marginBottom: '16px' }}
        onClick={viewPhotoHandler}
      />
      <div className={'ImageTitle'}>{selectedFashion?.title}</div>
      <div className={'ImageDescription'}>{selectedFashion?.description}</div>
      <PreviewCarousel items={fashionEntries} onSelect={selectImageHandler} ></PreviewCarousel>
    </div>
    <PhotoViewer
      photo={selectedFashion}
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}