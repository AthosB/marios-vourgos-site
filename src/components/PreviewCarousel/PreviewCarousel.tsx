"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from './PreviewCarousel.module.scss';
import {GenericItemType} from "@/Types/types";

import CarouselItem from "@/components/PreviewCarousel/CarouselItem";

interface CarouselItemProps {
  items: GenericItemType[];
  onSelect?: (imagePath: GenericItemType) => void;
  loopable?: boolean;
  autoPlay?: { duration: number; pauseOnMouseEnter: boolean; };
  showTitle?: boolean;
  showDescription?: boolean;
  disclaimer?: string;
}

export default function PreviewCarousel({
  items = [] as GenericItemType[],
  loopable = undefined,
  autoPlay = undefined,
  showTitle = true,
  showDescription = false,
  disclaimer,
  onSelect
}: CarouselItemProps) {
  const isMobile = window.innerWidth <= 768;

  const drawingsFilenames = items?.slice();

  const slides = () => drawingsFilenames.map((paintingItem: GenericItemType, paintingsItemIndex: number) => (
    <SwiperSlide key={`paintings-item-${paintingsItemIndex}`}
      style={
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: 'min-content !important',
          columnGap: isMobile ? '4px' : 'unset'
        }
      }
    >
      <CarouselItem
        src={paintingItem.src}
        alt={paintingItem.alt}
        title={showTitle ? paintingItem.title as string : undefined}
        description={showDescription ? paintingItem.description as string : undefined}
        disclaimer={disclaimer}
        height={isMobile ? undefined : 250}
        width={isMobile ? 200 : 'min-content !important'}
        className={styles.CarouselItem}
        onClick={() => clickPaintingHandler(paintingItem)}
      />
    </SwiperSlide>
  ));

  const clickPaintingHandler = (paintingData: GenericItemType) => {
    localStorage.setItem('previewData', JSON.stringify(paintingData));
    if (onSelect) onSelect(paintingData);
  }

  /** RENDER **/
  return (
    <div className={styles.PreviewCarousel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={isMobile ? 8 : 20}
        slidesPerView={5}
        loop={loopable}
        pagination={{clickable: true}}
        navigation={!isMobile}
        autoplay={autoPlay}
        style={{marginTop: '32px', minHeight: '360px', marginBottom: '46px'}}
        className={styles.SwiperContainer}
      >
        {slides()}
      </Swiper>
    </div>
  );
}
