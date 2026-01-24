// typescript
import {useCallback, useEffect, useState, useRef, CSSProperties, ReactNode} from 'react'
import './CustomEmblaCarousel.scss';
import useEmblaCarousel from 'embla-carousel-react'
import type {EmblaCarouselType} from 'embla-carousel'
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";

type Props = {
  slides: GenericItemType[]
  thumbHeight?: number
  pageSize?: number
  showDots?: boolean
  dragFree?: boolean
  showTitle?: boolean
  showDescription?: boolean
  showDisclaimer?: boolean
  disclaimer?: string | ReactNode;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max))
}

export default function CustomEmblaCarousel({
                                              slides,
                                              thumbHeight = 76,
                                              pageSize = 3,
                                              showDots = true,
                                              dragFree = true,
                                              showTitle = true,
                                              showDescription = true,
                                              showDisclaimer = false,
                                              disclaimer = 'Disclaimer: All photos are original photos as shot without any digital manipulation.'
                                            }: Props) {

  const [isMobile, setIsMobile] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<GenericItemType>(slides[0] ?? null);
  const [openMediaViewer, setOpenMediaViewer] = useState(false);

  const isDraggingRef = useRef(false)
  const thumbsContainerRef = useRef<HTMLDivElement | null>(null)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree,
    containScroll: 'trimSnaps',
    align: 'start',
  })

  const scrollThumbIntoView = useCallback(
    (api: EmblaCarouselType, index: number) => {
      const slideNodes = api.slideNodes()
      const total = slideNodes.length
      if (total <= pageSize) {
        api.scrollTo(0)
        return
      }
      if (!slideNodes[index]) return

      const container = slideNodes[0].parentElement as HTMLElement | null
      const viewport = container?.parentElement as HTMLElement | null
      if (!container || !viewport) {
        const half = Math.floor(pageSize / 2)
        const maxStart = Math.max(0, total - pageSize)
        const targetStart = clamp(index - half, 0, maxStart)
        api.scrollTo(targetStart)
        return
      }

      const viewportWidth = viewport.clientWidth
      const slide = slideNodes[index] as HTMLElement
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2
      const maxScrollLeft = Math.max(0, container.scrollWidth - viewportWidth)
      const desiredScrollLeft = clamp(slideCenter - viewportWidth / 2, 0, maxScrollLeft)

      const snaps = api.scrollSnapList()
      if (!snaps || snaps.length === 0) {
        const half = Math.floor(pageSize / 2)
        const maxStart = Math.max(0, total - pageSize)
        const targetStart = clamp(index - half, 0, maxStart)
        api.scrollTo(targetStart)
        return
      }

      const normalized = snaps[snaps.length - 1] <= 1
      let closestIndex = 0
      let minDiff = Infinity
      snaps.forEach((s, i) => {
        const snapPosPx = normalized ? s * maxScrollLeft : s
        const diff = Math.abs(snapPosPx - desiredScrollLeft)
        if (diff < minDiff) {
          minDiff = diff
          closestIndex = i
        }
      })

      api.scrollTo(closestIndex)
    },
    [pageSize]
  )


  const onThumbClick = useCallback(
    (i: number) => {
      if (!emblaApi) return
      setSelectedIndex(i)
      setSelectedImage(slides[i])
      scrollThumbIntoView(emblaApi, i)
    },
    [emblaApi, scrollThumbIntoView, slides]
  )

  const scrollBy = useCallback(
    (offset: number) => {
      if (!emblaApi) return
      const current = emblaApi.selectedScrollSnap()
      emblaApi.scrollTo(current + offset)
    },
    [emblaApi]
  )

  const scrollPrevious = () => {
    const el = thumbsContainerRef.current
    if (!el) return
    const distance = Math.round(window.innerWidth * 0.6) // 60vw in px
    el.scrollBy({ left: -distance, behavior: 'smooth' })
  }

  const scrollNext = () => {
    const el = thumbsContainerRef.current
    if (!el) return
    const distance = Math.round(window.innerWidth * 0.6) // 60vw in px
    el.scrollBy({ left: distance, behavior: 'smooth' })
  }

  // Replace useMemo with state + effect to recompute when embla re-inits or viewport resizes
  const [pageCount, setPageCount] = useState(() => Math.max(1, Math.ceil(slides.length / pageSize)))

  /** EFFECTS **/

  useEffect(() => {
    const updatePageCount = () => {
      const snaps = emblaApi?.scrollSnapList()
      const snapsCount = snaps?.length ?? slides.length
      setPageCount(Math.max(1, Math.ceil(snapsCount / pageSize)))
    }

    updatePageCount()
    emblaApi?.on('reInit', updatePageCount)
    window.addEventListener('resize', updatePageCount)

    return () => {
      emblaApi?.off('reInit', updatePageCount)
      window.removeEventListener('resize', updatePageCount)
    }
  }, [emblaApi, slides.length, pageSize])

  const [currentPage, setCurrentPage] = useState(0)

  const CHEVRON_SVG_STYLE: CSSProperties = {
    display: 'block',
    width: '12px',
    height: '72px',
  }

  const previewImageHandler = (image: GenericItemType) => {
    setSelectedImage(image);
    setOpenMediaViewer(true);
  }

  const closeMediaViewerHandler = () => {
    setOpenMediaViewer(false);
  }

  /** EFFECTS **/

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const updatePage = () => {
      const snap = emblaApi.selectedScrollSnap()
      setCurrentPage(Math.floor(snap / pageSize))
    }

    emblaApi.on('select', updatePage)
    emblaApi.on('reInit', updatePage)
    updatePage()

    return () => {
      emblaApi.off('select', updatePage)
      emblaApi.off('reInit', updatePage)
    }
  }, [emblaApi, pageSize])

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, []);

  return (
    <div className={`mc2${isMobile ? ' mc2--mobile' : ''}`}>
      <div className="mc2__preview">
        {selectedImage ? (
          <img
            src={selectedImage.preview ?? selectedImage.src}
            alt={selectedImage.alt ?? ''}
            onClick={() => previewImageHandler(selectedImage)}
            onContextMenu={(e) => e.preventDefault()}
            style={{cursor: 'zoom-in'}}
          />
        ) : null}
      </div>

      <div className="mc2-slide__meta">
        {showTitle && selectedImage?.title && selectedImage?.title?.length > 0 && (
          <div className="mc2-slide__title">
            {selectedImage.title}
          </div>
        )}

        {showDescription && selectedImage?.description && selectedImage?.description?.length > 0 && (
          <>
            {showDisclaimer && disclaimer && (
              <div className="mc2-slide__disclaimer">
                {disclaimer}
              </div>
            )}
            <div className="mc2-slide__description">
              {selectedImage.description}
            </div>
          </>
        )}
      </div>

      <div className="mc2__thumbbar">
        <button
          aria-label="Previous"
          type="button"
          className="mc2__arrow prev-arrow"
          onClick={scrollPrevious}
        >
          <svg
            viewBox="0 0 24 144"
            style={CHEVRON_SVG_STYLE}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <polyline
              points="16,12 8,72 16,132"
              fill="none"
              stroke="#fcb040"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="thumbs-section">
          <div
            className="thumbs-container"
            style={{['--thumb-h' as any]: `${thumbHeight}px`}}
            ref={thumbsContainerRef}
          >
            {slides.map((s, i) => (
              <button
                key={`${s.src}-${i}`}
                type="button"
                className={`mc2__thumb ${i === selectedIndex ? 'is-selected' : ''}`}
                onClick={() => onThumbClick(i)}
                title={s.title ?? s.alt ?? ''}
              >
                <img
                  className="mc2__thumbImg"
                  src={s.thumb ?? s.src}
                  alt={s.alt ?? ''}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </button>
            ))}
          </div>
        </div>

        <button
          aria-label="Next"
          type="button"
          className="mc2__arrow  next-arrow"
          onClick={scrollNext}
        >
          <svg
            viewBox="0 0 24 144"
            style={CHEVRON_SVG_STYLE}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <polyline
              points="8,12 16,72 8,132"
              fill="none"
              stroke="#fcb040"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Only render dots when there is more than one page */}
      {showDots && pageCount > 1 && (
        <div className="mc2__dots">
          {Array.from({length: pageCount}).map((_, p) => (
            <button
              key={p}
              type="button"
              className={`mc2__dot ${p === currentPage ? 'is-active' : ''}`}
              onClick={() => emblaApi?.scrollTo(p * pageSize)}
              aria-label={`Go to thumbnails page ${p + 1}`}
            />
          ))}
        </div>
      )}

      {selectedImage && openMediaViewer && (
        <PhotoViewer
          open={openMediaViewer}
          media={selectedImage}
          onClose={closeMediaViewerHandler}
        />
      )}
    </div>
  )
}
