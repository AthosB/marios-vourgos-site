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
  description?: string;
}

export default function PhotographyCarousel() {
  /** CONSTS **/
  const photoFilenames = [
    {src: "/images/photography/001.jpg", alt: "Img 1", description: "Untouched photograph"},
    {src: "/images/photography/002.jpg", alt: "Img 2", description: ""},
    {src: "/images/photography/003.jpg", alt: "Img 3", description: "Parallel figures"},
    {src: "/images/photography/004.jpg", alt: "Img 4", description: "Wandering wisp-like entity"},
    {src: "/images/photography/005.jpg", alt: "Img 5", description: ""},
    {src: "/images/photography/006.jpg", alt: "Img 6", description: ""},
    {src: "/images/photography/007.jpg", alt: "Img 7", description: "A fleeting glance"},
    {src: "/images/photography/008.jpg", alt: "Img 8", description: "A moment in time"},
    {src: "/images/photography/009.jpg", alt: "Img 9", description: "Dual faces from the past"},
    {src: "/images/photography/010.jpg", alt: "Img 10", description: "Wandering wisp-like entity"},
  ] as imageType[];

  const slides = () =>
    photoFilenames.map((img: imageType, index: number) => (
      <SwiperSlide key={`${img}-key-${index}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <PhotographyItem
          photoSrc={img.src} photoAlt={img.alt}
          title={`Photography ${index + 1}`}
          description={img.description as string || undefined}
          dimensions={{width: 600, height: 500}}
        />
      </SwiperSlide>
    ));

  /** RENDER **/
  return (
    <div className={styles.PhotographyCarousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        style={{ height: "720px" }}
      >
        {slides()}
      </Swiper>
    </div>
  );
}