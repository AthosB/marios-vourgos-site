"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './PhotographyCarousel.module.scss';

export default function PhotographyCarousel() {
  /** CONSTS **/
  const photoFilenames = [
    {src: "/images/photography/001.jpg", alt: "Img 1"},
    {src: "/images/photography/002.jpg", alt: "Img 2"},
    {src: "/images/photography/003.jpg", alt: "Img 3"},
    {src: "/images/photography/004.jpg", alt: "Img 4"},
    {src: "/images/photography/005.jpg", alt: "Img 5"},
    {src: "/images/photography/006.jpg", alt: "Img 6"},
    {src: "/images/photography/007.jpg", alt: "Img 7"},
    {src: "/images/photography/008.jpg", alt: "Img 8"},
    {src: "/images/photography/009.jpg", alt: "Img 9"},
    {src: "/images/photography/010.jpg", alt: "Img 10"}
  ] as { src: string, alt: string }[];

  const slides = () =>
    photoFilenames.map((img: { src: string, alt: string }, index: number) => (
      <SwiperSlide key={`${img}-key-${index}`} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <img src={img.src as string} alt={img.alt as string || `Slide ${index + 1}`}
          style={{width: "360px", maxWidth: "100%", height: "auto", boxSizing: "content-box", border: '8px solid #919191', borderRadius: "0", justifySelf: "center"}}
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
        style={{ height: "512px" }}
      >
        {slides()}
      </Swiper>
    </div>
  );
}