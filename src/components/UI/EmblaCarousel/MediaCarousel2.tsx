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
  const [selectedImage, setSelectedImage] = useState<GenericItemType | null>(slides[0]);
  const [openMediaViewer, setOpenMediaViewer] = useState(false);
  const [currentScrollSnap, setCurrentScrollSnap] = useState(0);
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
    if (!emblaMainApi || !emblaThumbsApi) return;
    // setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi])

  const onNext = () => {
    // if (!emblaMainApi) return;
    // console.log('Next arrow click');
    // console.log('emblaThumbsRef', emblaThumbsRef);
    // emblaMainApi.scrollTo(emblaMainApi.selectedScrollSnap() + 5);
    if (!emblaMainApi || !emblaThumbsApi) return;
    const index = currentScrollSnap;
    setCurrentScrollSnap(index + 5);

    // scroll main carousel to the clicked slide
    emblaMainApi.scrollTo(index);

    // center the clicked thumb in the thumbs viewport
    const total = emblaThumbsApi.slideNodes().length;
    console.log('total', total);
    const lastPage = Math.ceil(slides.length / PAGE_SIZE);
    console.log('last page', lastPage);
    // if (total <= PAGE_SIZE) {
    //   emblaThumbsApi.scrollTo(0);
    //   return;
    // }
    if(currentScrollSnap < lastPage) {
      emblaThumbsApi.scrollTo(0);
      return;
    }

    const half = Math.floor(PAGE_SIZE / 2);
    const maxStart = Math.max(0, total - PAGE_SIZE);
    const target = Math.max(0, Math.min(index - half, maxStart));

    emblaThumbsApi.scrollTo(isMobile ? target + 2 : target);
    console.log('current scroll snap', currentScrollSnap);
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

  const selectThumbHandler = (mediaData: GenericItemType) => {
    setSelectedImage(mediaData);
  };

  const previewImageHandler = (image: GenericItemType) => {
    setSelectedImage(image);
    setOpenMediaViewer(true);
  }

  const closeMediaViewerHandler = () => {
    setSelectedImage(null);
    setOpenMediaViewer(false);
  }

  const scrollBy = (offset: number) => {
    if (!emblaMainApi) return

    const currentIndex = emblaMainApi.selectedScrollSnap()
    console.log('current index', currentIndex);
    emblaMainApi.scrollTo(currentIndex + offset)
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
          <div className="media-preview__container">
            <img
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              onClick={() => previewImageHandler(selectedImage!)}
            />
          </div>
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
        {/*<div className="embla-thumbs" style={{ width: isMobile ? 'calc(100vw - 88px)' : 'auto' }}>*/}
        {/*  <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>*/}
        {/*    <div className="embla-thumbs__container">*/}
        {/*      {slides.map((slideItem: GenericItemType, index: number) => (*/}
        {/*        <Thumb*/}
        {/*          key={index}*/}
        {/*          onClick={() => onThumbClick(index)}*/}
        {/*          selected={index === selectedIndex}*/}
        {/*          isLandscape={slideItem.landscape}*/}
        {/*          isVideo={slideItem.video}*/}
        {/*          isMobile={isMobile}*/}
        {/*          index={index}*/}
        {/*          imageSrc={slideItem.src}*/}
        {/*          flex={thumbsFlex}*/}
        {/*        />*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="embla-thumbs">
          <div className={`embla-thumbs__viewport${isMobile ? ' Mobile' : ''}`} ref={emblaThumbsRef}>
            <div className="embla-thumbs__container" style={{ ["--thumb-h" as any]: "76px" }}>
              {slides.map((s, i) => (
                <div
                  className={`embla-thumbs__slide${isMobile ? ' Mobile' : ''}`} key={s.src}
                  onClick={() => selectThumbHandler(s)}
                >
                  <button
                    type="button"
                    className="embla-thumbs__button embla-thumbs__slide__number embla-thumb-item"
                    onClick={() => emblaMainApi?.scrollTo(i)}
                  >
                    <img className="embla-thumbs__img" src={s.src} alt={s.alt ?? ""} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showArrows && <div>
          <NextButton
            onClick={() => scrollBy(5)} disabled={false}
          />
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
