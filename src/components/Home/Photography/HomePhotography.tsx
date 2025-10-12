'use client';

import {useState} from "react";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import PreviewCarousel from "@/components/PreviewCarousel/PreviewCarousel";

import {photographyCarouselFilenames} from "@/assets/values";

type imageType = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export default function HomePhotography() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<imageType | null>(photographyCarouselFilenames[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const selectImageHandler = (imageData: imageType) => {
    // console.log('Selected image: ', imageData);
    setSelectedPhoto(imageData);
  };

  const viewPhotoHandler = () => {
    localStorage.setItem('previewData', JSON.stringify(selectedPhoto));
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
        src={selectedPhoto?.src || '/images/home-photography-first.JPG'}
        alt={selectedPhoto?.title || "Photography"}
        width={360}
        style={{marginBottom: '16px'}}
        onClick={viewPhotoHandler}
      />
      <div className={'ImageTitle'}>{selectedPhoto?.title}</div>
      <div className={'ImageDescription'}>{selectedPhoto?.description}</div>
      <div className={'ImageDisclaimer'}>Disclaimer: All photos are original photos as shot without any digital
        manipulation
      </div>
      <PreviewCarousel
        items={photographyCarouselFilenames}
        showTitle={false}
        showDescription={false}
        onSelect={selectImageHandler}
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