// src/components/Home/Fashion/HomeFashion.tsx
'use client';

// import '@/styles/mario.scss';
import "./FashionCarousel.scss";
import {fashionEntries} from '@/assets/enhancedValues';
import {useCallback, useEffect, useRef, useState} from "react";
import {GenericItemType} from "@/Types/types";
import useEmblaCarousel from "embla-carousel-react";
import {NextButton, PrevButton, usePrevNextButtons} from "@/components/UI/EmblaCarousel/ArrowButtons";
import {useDotButton} from "@/components/UI/EmblaCarousel/DotButton";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {Thumb} from "./FashionThumbsButton";

export default function HomeFashion() {
  /** PRES **/
  const isMobile = window.innerWidth <= 768;

  /** HOOKS **/
  const [selectedImage, setSelectedImage] = useState<GenericItemType | null>(null);
  const [openMediaViewer, setOpenMediaViewer] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({})
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    // onPrevButtonClick,
    // onNextButtonClick
  } = usePrevNextButtons(emblaMainApi)
  const {selectedIndex} =
    useDotButton(emblaMainApi)

  /** CONSTS **/

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
      if (isMobile) {
        emblaThumbsApi.scrollTo(index)
      } else {
        emblaThumbsApi.scrollTo(index)
      }
    },
    [emblaMainApi, emblaThumbsApi]
  )


  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    // setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi])

  const onNext = () => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollTo(emblaMainApi.selectedScrollSnap() + 5);
  };

  const onPrevious = () => {
    if (!emblaMainApi) return;
    emblaMainApi.scrollTo(emblaMainApi.selectedScrollSnap() - 5);
  }

  const PAGE_SIZE = 5;

  const getCurrentPage = () => {
    if (!emblaMainApi) return 0;
    return Math.floor(emblaMainApi.selectedScrollSnap() / PAGE_SIZE);
  };

  const previewImageHandler = (image: GenericItemType) => {
    setSelectedImage(image);
    setOpenMediaViewer(true);
  }

  const closeMediaViewerHandler = () => {
    setSelectedImage(null);
    setOpenMediaViewer(false);
  }

  /** EFFECTS **/

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  useEffect(() => {
    if (!emblaMainApi) return;

    const update = () => {
      setCurrentPage(getCurrentPage());
    };

    emblaMainApi.on('select', update);
    emblaMainApi.on('reInit', update);

    update();
  }, [emblaMainApi]);

  /** RENDER **/
  return <>
    <div id="home-fashion" className="preview-canvas">
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {fashionEntries.map((slideItem: GenericItemType, index: number) => (
              <div className="embla__slide" key={index}>
                {slideItem.video ? (<div className="embla__slide__video">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    height={isMobile ? 'fit-content' : '100%'}
                    width={isMobile ? 98 : 'min-content !important'}
                    style={{
                      objectFit: 'cover',
                      flex: isMobile ? 1 : 'unset'
                    }}
                  >
                    <source src={slideItem.src} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                </div>) : (
                  <div
                    className={`embla__slide__image ${slideItem.src.includes('paintings') ? 'paintings' : ''}`}
                    style={{
                      backgroundImage: `url(${slideItem.src})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                    }}
                    onClick={() => previewImageHandler(slideItem)}
                  >
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="embla-slider-container">
          <div>
            <PrevButton onClick={onPrevious} disabled={prevBtnDisabled} />
          </div>
          <div className="embla-thumbs" style={{ width: isMobile ? 'calc(100vw - 88px)' : 'calc(100vw - 148px)' }}>
            <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
              <div className="embla-thumbs__container">
                {fashionEntries.map((slideItem: GenericItemType, index: number) => (
                  <Thumb
                    key={index}
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    isVideo={slideItem.video}
                    isMobile={isMobile}
                    index={index}
                    imageSrc={slideItem.src}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <NextButton onClick={onNext} disabled={nextBtnDisabled} />
          </div>
        </div>
        {/*<div className="embla-dots-navigatiion">*/}
        {/*  <div className="embla__dots">*/}
        {/*    {Array.from({length: getPageCount()}).map((_, index: number) => (*/}
        {/*      <button*/}
        {/*        key={index}*/}
        {/*        className={index === currentPage ? 'embla__dot embla__dot--selected' : 'embla__dot'}*/}
        {/*        onClick={() => emblaMainApi?.scrollTo(index * PAGE_SIZE)}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
        </div>
      </div>
    {selectedImage && (
      <PhotoViewer
        open={openMediaViewer}
        media={selectedImage}
        onClose={closeMediaViewerHandler}
      />
    )}
  </>;
}