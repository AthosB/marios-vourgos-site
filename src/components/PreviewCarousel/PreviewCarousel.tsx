'use client';

import styles from "@/components/Home/PhotographyCarousel.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselItem from "@/components/PreviewCarousel/CarouselItem";

type genericItem = {
  position?: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface PreviewCarouselProps {
  items: genericItem[];
  onSelect?: (path: genericItem) => void;
}

export default function PreviewCarousel({items = [], onSelect}: PreviewCarouselProps) {
  /** CONSTS **/
  const itemFilenames = items.slice();

  const onClickItemHandler = (item: genericItem) => {
    if (onSelect) onSelect(item);
  }

  const slides = () =>
    itemFilenames.map((item: genericItem, index: number) => (
      <SwiperSlide
        key={`carousel-slide-item-key-${index}`}
        style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}
      >
        <CarouselItem
          src={item.src} alt={item.alt || item.title || ''}
          title={`${item.title || 'Item'}`}
          description={item.description as string || undefined}
          width={300}
          height={250}
          onClick={() => onClickItemHandler(item)}
        />
      </SwiperSlide>
    ));

  /** RENDER **/
  return (
    <div className="PreviewCarousel">
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
  )
}