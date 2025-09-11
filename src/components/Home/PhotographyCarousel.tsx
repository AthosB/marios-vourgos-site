"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './PhotographyCarousel.module.scss';
import PhotographyItem from "@/components/UI/PhotographyItem/PhotographyItem";
import {GenericItemType} from "@/Types/types";
import {photoFilenames} from "@/assets/values";

type imageType = {
  src: string;
  alt: string;
	title?: string;
  description?: string;
}

export default function PhotographyCarousel({
  onSelectImage
}:{onSelectImage?: (imagePath: imageType) => void}) {
  /** CONSTS **/
  // const photoFilenames = [
  //   {position: 1, src: "/images/photography/Carousel/001.jpg", alt: "Img 1", description: "Untouched photograph"},
  //   {position: 1, src: "/images/photography/Carousel/002.jpg", alt: "Img 2", description: ""},
  //   {position: 1, src: "/images/photography/Carousel/003.jpg", alt: "Img 3", description: "Parallel figures"},
  //   {position: 1, src: "/images/photography/Carousel/004.jpg", alt: "Img 4", description: "Wandering wisp-like entity"},
  //   {position: 1, src: "/images/photography/Carousel/005.jpg", alt: "Img 5", description: ""},
  //   {position: 1, src: "/images/photography/Carousel/006.jpg", alt: "Img 6", description: ""},
  //   {position: 1, src: "/images/photography/Carousel/007.jpg", alt: "Img 7", description: "A fleeting glance"},
  //   {position: 1, src: "/images/photography/Carousel/008.jpg", alt: "Img 8", description: "A moment in time"},
  //   {position: 1, src: "/images/photography/Carousel/009.jpg", alt: "Img 9", description: "Dual faces from the past"},
  //   {position: 1, src: "/images/photography/Carousel/010.jpg", alt: "Img 10", description: "Wandering wisp-like entity"},
  // ] as GenericItemType[];

  const sortedPhotos = photoFilenames.sort((a: GenericItemType, b: GenericItemType) => (a.position || 2) - (b.position || 1));

  const slides = () =>
    sortedPhotos.map((img: imageType, index: number) => (
      <SwiperSlide key={`${img}-key-${index}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <PhotographyItem
          photoSrc={img.src} photoAlt={img.alt}
          title={`${img.title || ('Photography ' + index + 1)}`}
          description={img.description as string || undefined}
          dimensions={{width: 300, height: 250}}
          width={300}
          height={250}
          onClick={() => clickImageHandler(img)}
        />
      </SwiperSlide>
    ));

  const clickImageHandler = (imageData: imageType) => {
    if(onSelectImage) onSelectImage(imageData);
  }

  /** RENDER **/
  return (
    <div className={styles.PhotographyCarousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        style={{ marginTop: '32px', minHeight: '360px', marginBottom: '46px' }}
        className={styles.SwiperContainer}
      >
        {slides()}
      </Swiper>
    </div>
  );
}