'use client';

import {useState} from "react";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import PreviewCarousel from "@/components/PreviewCarousel/PreviewCarousel";

import {photoFilenames} from "@/assets/values";

type imageType = {
	src: string;
	alt: string;
	title?: string;
	description?: string;
}

const startingPhoto =  {
  position: 40,
  src: "/images/photography/040.jpg",
  alt: "Img 40",
  title: 'Sardonic Smile',
  description: "100 cm x 80 cm"
};

export default function HomePhotography() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<imageType | null>(startingPhoto);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const selectImageHandler = (imageData: imageType) => {
    // console.log("Selected image: ", imagePath);
	  setSelectedPhoto(imageData);
  };

  const viewPhotoHandler = () => {
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
  }

  /** RENDER **/
  return <>
    <div className={'HomePhotography'} style={{width:'100%',height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <img
        src={selectedPhoto?.src || '/images/home-photography-first.JPG'}
        alt={selectedPhoto?.title || "Photography"}
        height={720}
        style={{ marginBottom: '16px' }}
        onClick={viewPhotoHandler}
      />
      <div className={'ImageTitle'}>{selectedPhoto?.title}</div>
      <div className={'ImageDescription'}>{selectedPhoto?.description}</div>
      <PreviewCarousel items={photoFilenames} onSelect={selectImageHandler} ></PreviewCarousel>
    </div>
    <PhotoViewer
      photo={selectedPhoto} 
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </>;
}