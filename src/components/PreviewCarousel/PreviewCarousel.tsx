"use client"
import {CSSProperties, MouseEventHandler, FC} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PreviewCarousel.css';
import styles from './PreviewCarousel.module.scss';
import {GenericItemType} from "@/Types/types";

import CarouselItem from "@/components/PreviewCarousel/CarouselItem";

import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
};

interface CarouselItemProps {
  items: GenericItemType[];
  onSelect?: (imagePath: GenericItemType) => void;
  loopable?: boolean;
  autoPlay?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  disclaimer?: string;
}

export default function PreviewCarousel({
  items = [] as GenericItemType[],
  loopable = false,
  showTitle = true,
  showDescription = false,
  autoPlay = false,
  showDots = false,
  showArrows = true,
  disclaimer,
  onSelect
}: CarouselItemProps) {
  const isMobile = window.innerWidth <= 768;

  const drawingsFilenames = items?.slice();

  const slides = () => drawingsFilenames.map((paintingItem: GenericItemType, paintingsItemIndex: number) => (
    <CarouselItem
      src={paintingItem.src}
      alt={paintingItem.alt}
      title={showTitle ? paintingItem.title as string : undefined}
      description={showDescription ? paintingItem.description as string : undefined}
      disclaimer={disclaimer}
      height={isMobile ? undefined : 250}
      width={isMobile ? paintingItem.cols ? (paintingItem.cols * 200) : 200 : 'min-content !important'}
      className={styles.CarouselItem}
      onClick={() => clickPaintingHandler(paintingItem)}
      key={`paintings-item-${paintingsItemIndex}`}
      // style={
      //   {
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     height: "100%",
      //     width: 'min-content !important',
      //     columnGap: isMobile ? '4px' : 'unset'
      //   }
      // }
    />
  ));

  const clickPaintingHandler = (paintingData: GenericItemType) => {
    localStorage.setItem('previewData', JSON.stringify(paintingData));
    if (onSelect) onSelect(paintingData);
  }

  const arrowStyleBase: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "#fff",
    width: 36,
    height: 36,
    boxShadow: 'none'
  };

  const PrevArrow: FC<ArrowProps> = ({className, style, onClick} : ArrowProps) => {
    return (
      <div className={className + ' slick-arrow'} style={{...style, display: 'block'}}>
        <IconButton
          aria-label="previous"
          onClick={onClick}
          size="small"
          sx={{...arrowStyleBase}}
        >
          <ArrowBackIosNewIcon fontSize="small" color={'warning'} />
        </IconButton>
      </div>
    );
  };

  const NextArrow: FC<ArrowProps> = ({className, style, onClick} : ArrowProps) => {
    return (
      <div className={className} style={{...style, display: 'block'}}>
        <IconButton
          aria-label="next"
          onClick={onClick}
          size="small"
          sx={{...arrowStyleBase}}
        >
          <ArrowForwardIosIcon fontSize="small" color={'warning'} />
        </IconButton>
      </div>
    );
  };

  const carouselSettings = {
    dots: showDots,
    infinite: loopable,
    speed: 500,
    // slidesToShow: isMobile ? 5 : 7,
    // slidesToShow: drawingsFilenames.length,
    swipeToSlide: true,
    touchMove: true,

    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    variableWidth: true,
    draggable: true,
    waitForAnimate: false,
    autoPlay: autoPlay,
    prevArrow: showArrows ? <PrevArrow /> : undefined,
    nextArrow: showArrows ? <NextArrow /> : undefined
  };

  /** RENDER **/
  return (
    <div className={styles.PreviewCarousel}>
      <Slider {...carouselSettings}>
        {slides()}
      </Slider>
    </div>
  );
}
