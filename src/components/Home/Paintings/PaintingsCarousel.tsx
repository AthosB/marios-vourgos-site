"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './PaintingsCarousel.module.scss';
import {GenericItemType} from "@/Types/types";

import PaintingsItem  from "@/components/UI/PaintingsItem/PaintingsItem";

export default function PaintingsCarousel({
  items = [] as GenericItemType[],
  onSelectPainting
}: { items: GenericItemType[], onSelectPainting?: (imagePath: GenericItemType) => void }) {
  const drawingsFilenames = items?.slice(0, 10);

  const slides = () => drawingsFilenames.map((paintingItem: GenericItemType, paintingsItemIndex: number) => (
    <SwiperSlide key={`paintings-item-${paintingsItemIndex}`}
      style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}
    >
      <PaintingsItem
        photoSrc={paintingItem.src} photoAlt={paintingItem.alt}
        title={`${paintingItem.title || ('Painting ' + paintingsItemIndex + 1)}`}
        description={paintingItem.description as string || undefined}
        dimensions={{width: 300, height: 250}}
        width={300}
        height={250}
        onClick={() => clickPaintingHandler(paintingItem)}
      />
    </SwiperSlide>
  ));

  const clickPaintingHandler = (paintingData: GenericItemType) => {
    if (onSelectPainting) onSelectPainting(paintingData);
  }

  /** RENDER **/
  return (
    <div className={styles.PaintingsCarousel}>
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
