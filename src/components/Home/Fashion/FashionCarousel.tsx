"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './FashionCarousel.module.scss';
import {FashionItemType} from "@/Types/types";

import {fashionEntries} from '@/assets/values';
import FashionItem from "@/components/Fashion/FashionItem";

export default function FashionCarousel() {
  const slides = () => fashionEntries.map((fashionItem: FashionItemType, fashionItemIndex: number) => (
    <SwiperSlide key={`fashion-item-${fashionItemIndex}`}
      style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
      <FashionItem image={fashionItem.src} description={fashionItem.description as string || undefined}/>
    </SwiperSlide>
  ));

  /** RENDER **/
  return (
    <div className={styles.FashionCarousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop
        pagination={{clickable: true}}
        navigation
        autoplay={{delay: 3000}}
        style={{marginTop: '32px', minHeight: '360px', marginBottom: '46px'}}
        className={styles.SwiperContainer}
      >
        {slides()}
      </Swiper>
    </div>
  );
}
