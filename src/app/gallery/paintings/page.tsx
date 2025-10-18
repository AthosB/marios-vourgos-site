'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {paintingsCarousel} from "@/assets/values";
import {GenericItemType} from "@/Types/types";
import CarouselItem from "@/components/PreviewCarousel/CarouselItem";

export default function PaintingsPage() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    draggable: true,
  };

  return (
    <div className="paintings-page">
      <h1>Paintings Gallery</h1>
      <p>
        Discover our exquisite collection of paintings that span various styles
        and eras. From classic masterpieces to contemporary works, each piece
        tells a unique story and showcases the artist`s vision.
      </p>
      <p>
        Whether you are an art enthusiast or simply appreciate the beauty of
        painting, this gallery offers a visual feast that will inspire and
        captivate you.
      </p>
      <div style={{padding: '16px 32px'}}>
        <div className={'slider-container'}>
          <Slider {...settings}>
            {paintingsCarousel.map((painting: GenericItemType, paintingIndex: number) => (
              <CarouselItem key={`painting-carousel-item-${paintingIndex}`} src={painting.src} alt={painting.title as string} description={painting.description} height={250} width={'min-content !important'} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}