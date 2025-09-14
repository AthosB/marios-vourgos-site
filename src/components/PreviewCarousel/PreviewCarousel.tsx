"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './PreviewCarousel.module.scss';
import {GenericItemType} from "@/Types/types";

import CarouselItem  from "@/components/PreviewCarousel/CarouselItem";

export default function PreviewCarousel({
  items = [] as GenericItemType[],
  onSelect
}: { items: GenericItemType[], onSelect?: (imagePath: GenericItemType) => void }) {
  const isMobile = window.innerWidth <= 768;

  const drawingsFilenames = items?.slice(0, 10);

  const slides = () => drawingsFilenames.map((paintingItem: GenericItemType, paintingsItemIndex: number) => (
    <SwiperSlide key={`paintings-item-${paintingsItemIndex}`}
      style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", columnGap: isMobile ? '4px' : 'unset'}}
    >
      <CarouselItem
        src={paintingItem.src}
        alt={paintingItem.alt}
        title={`${paintingItem.title || ('Painting ' + paintingsItemIndex + 1)}`}
        description={paintingItem.description as string || undefined}
        height={isMobile ? undefined : 250}
        width={isMobile ? 200 : undefined}
        className={styles.CarouselItem}
        onClick={() => clickPaintingHandler(paintingItem)}
      />
    </SwiperSlide>
  ));

  const clickPaintingHandler = (paintingData: GenericItemType) => {
    if (onSelect) onSelect(paintingData);
  }

  /** RENDER **/
  return (
    <div className={styles.PreviewCarousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={isMobile ? 8 : 20}
        slidesPerView={5}
        loop
        pagination={{clickable: true}}
        navigation={!isMobile}
        autoplay={{delay: 3000}}
        style={{marginTop: '32px', minHeight: '360px', marginBottom: '46px'}}
        className={styles.SwiperContainer}
      >
        {slides()}
      </Swiper>
    </div>
  );
}
