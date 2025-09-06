'use client';

import {useState} from "react";
import styles from "@/app/home/Home.module.scss";
import PhotographyCarousel from "@/components/Home/PhotographyCarousel";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

type imageType = {
	src: string;
	alt: string;
	title?: string;
	description?: string;
}

const startingPhoto =  {position: 1, src: "/images/photography/038.jpg", alt: "Img 38", title: 'Sardonic Smile', description: "100 cm x 80 cm"};

export default function HomePhotography() {
  /** HOOKS **/
  // index 37 from values
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
  return <div className={styles.Section + ' ' + styles.Red + ' ' + styles.InLine}>
    <div style={{width:'100%',height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <img
        src={selectedPhoto?.src || '/images/home-photography-first.JPG'}
        alt={selectedPhoto?.title || "Photography"}
        height={720}
        style={{ marginBottom: '16px' }}
        onClick={viewPhotoHandler}
      />
      <PhotographyCarousel onSelectImage={selectImageHandler} ></PhotographyCarousel>
    </div>
    <PhotoViewer
      photo={selectedPhoto} 
      open={openPhotoViewer}
      onClose={closePhotoViewerHandler}
    />
  </div>;
}