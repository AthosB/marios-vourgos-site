import {FC, useState, useEffect, useCallback, ReactNode, useRef} from 'react'
import {EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {Thumb} from './ThumbsButton'
import {GenericItemType} from "@/Types/types";
import './EmblaCarousel.scss';
import {NextButton, PrevButton, usePrevNextButtons} from "@/components/UI/EmblaCarousel/ArrowButtons";
import {useDotButton} from "@/components/UI/EmblaCarousel/DotButton";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

type PropType = {
  slides: GenericItemType[]
  options?: EmblaOptionsType
  disclaimer?: string | ReactNode;
  showTitle?: boolean
  showDescription?: boolean
  showDisclaimer?: boolean
  showArrows?: boolean
  showDots?: boolean
  thumbsFlex?: string
}

const MediaCarousel2: FC<PropType> = (props: PropType) => {
  const {
    slides = [] as GenericItemType[],
    options = {},
    disclaimer = 'Disclaimer: All photos are original photos as shot without any digital manipulation.',
    showTitle = true,
    showDescription = true,
    showDisclaimer = false,
    showArrows = true,
    showDots = false,
    thumbsFlex = '0 0 22%'
  } = props
  const isMobile = window.innerWidth <= 768;
  // const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<GenericItemType | null>(null);
  const [openMediaViewer, setOpenMediaViewer] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
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

  const PAGE_SIZE = 5;

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;

      // scroll main carousel to the clicked slide
      emblaMainApi.scrollTo(index);

      // center the clicked thumb in the thumbs viewport
      const total = emblaThumbsApi.slideNodes().length;
      if (total <= PAGE_SIZE) {
        emblaThumbsApi.scrollTo(0);
        return;
      }

      const half = Math.floor(PAGE_SIZE / 2);
      const maxStart = Math.max(0, total - PAGE_SIZE);
      const target = Math.max(0, Math.min(index - half, maxStart));

      emblaThumbsApi.scrollTo(isMobile ? target + 2 : target);
    },
    [emblaMainApi, emblaThumbsApi]
  );

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

  const getPageCount = () => {
    if (!emblaMainApi) return 0;
    return Math.ceil(emblaMainApi.slideNodes().length / PAGE_SIZE);
  };

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

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {slides.map((slideItem: GenericItemType, index: number) => (
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
                  style={{ objectFit: 'cover', flex: isMobile ? 1 : 'unset' }}
                >
                  <source src={slideItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>) : (<div
                className="embla__slide__image"
                style={{
                  backgroundImage: `url(${slideItem.src})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center'
                }}
                onClick={() => previewImageHandler(slideItem)}
              ></div>)}
            </div>
          ))}
        </div>

        <div className="embla-slide__meta">
          {(showTitle && slides && slides[selectedIndex].title && slides[selectedIndex].title.length > 0) &&
            <div className="embla-slide__title">
              {slides[selectedIndex]?.title}
            </div>}
          {(showDescription && slides && slides[selectedIndex] && slides[selectedIndex].description && slides[selectedIndex]?.description?.length > 0) &&
            <div className="embla-slide__description">            {slides[selectedIndex]?.description}
            </div>}
          {(showDisclaimer && disclaimer) &&
            <div className="embla-slide__disclaimer">
              {disclaimer}
            </div>}
        </div>
      </div>

      <div className="embla-slider-container">
        {showArrows && <div>
          <PrevButton onClick={onPrevious} disabled={prevBtnDisabled} />
        </div>}
        <div className="embla-thumbs" style={{ width: isMobile ? 'calc(100vw - 88px)' : 'auto' }}>
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {slides.map((slideItem: GenericItemType, index: number) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  isLandscape={slideItem.landscape}
                  isVideo={slideItem.video}
                  isMobile={isMobile}
                  index={index}
                  imageSrc={slideItem.src}
                  flex={thumbsFlex}
                />
              ))}
            </div>
          </div>
        </div>
        {showArrows && <div>
          <NextButton onClick={onNext} disabled={nextBtnDisabled} />
        </div>}
      </div>
      {showDots && <div className="embla-dots-navigatiion">
        <div className="embla__dots">
          {Array.from({length: getPageCount()}).map((_, index: number) => (
            <button
              key={index}
              className={index === currentPage ? 'embla__dot embla__dot--selected' : 'embla__dot'}
              onClick={() => emblaMainApi?.scrollTo(index * PAGE_SIZE)}
            />
          ))}
        </div>
      </div>}
      {selectedImage && (
        <PhotoViewer
          open={openMediaViewer}
          media={selectedImage}
          onClose={closeMediaViewerHandler}
        />
      )}
    </div>
  )
}

export default MediaCarousel2
