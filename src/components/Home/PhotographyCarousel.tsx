"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './PhotographyCarousel.module.scss';
import PhotographyItem from "@/components/UI/PhotographyItem/PhotographyItem";

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
  const photoFilenames = [
    {src: "/images/photography/Carousel/001.jpg", alt: "Img 1", description: "Untouched photograph"},
    {src: "/images/photography/Carousel/002.jpg", alt: "Img 2", description: ""},
    {src: "/images/photography/Carousel/003.jpg", alt: "Img 3", description: "Parallel figures"},
    {src: "/images/photography/Carousel/004.jpg", alt: "Img 4", description: "Wandering wisp-like entity"},
    {src: "/images/photography/Carousel/005.jpg", alt: "Img 5", description: ""},
    {src: "/images/photography/Carousel/006.jpg", alt: "Img 6", description: ""},
    {src: "/images/photography/Carousel/007.jpg", alt: "Img 7", description: "A fleeting glance"},
    {src: "/images/photography/Carousel/008.jpg", alt: "Img 8", description: "A moment in time"},
    {src: "/images/photography/Carousel/009.jpg", alt: "Img 9", description: "Dual faces from the past"},
    {src: "/images/photography/Carousel/010.jpg", alt: "Img 10", description: "Wandering wisp-like entity"},
  ] as imageType[];

  const slides = () =>
    photoFilenames.map((img: imageType, index: number) => (
      <SwiperSlide key={`${img}-key-${index}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <PhotographyItem
          photoSrc={img.src} photoAlt={img.alt}
          title={`Photography ${index + 1}`}
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