// TypeScript
'use client'

import React, {useCallback, useEffect, useMemo, useState, CSSProperties, ReactNode, useRef} from 'react'
import './CustomEmblaCarouselFashion.scss';
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

export default function CustomEmblaCarouselFashion({
                                                     slides,
                                                     thumbHeight = 94,
                                                     pageSize = 3,
                                                     showDots = true,
                                                     showTitle = true,
                                                     showDescription = true,
                                                     showDisclaimer = false,
                                                     disclaimer = 'Disclaimer: All photos are original photos as shot without any digital manipulation.'
                                                   }: Props) {

  /** STATES **/
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<GenericItemType>(slides[0]);
  const [openMediaViewer, setOpenMediaViewer] = useState(false);

  /** HOOKS **/
  const previewVideoRef = useRef<HTMLVideoElement | null>(null);

  // Thumbs-only Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'keepSnaps',
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
      setSelectedIndex(i)
      setSelectedImage(slides[i])
      if (!emblaApi) return
      scrollThumbIntoView(emblaApi, i)
    },
    [emblaApi, scrollThumbIntoView]
  )

  const scrollBy = useCallback(
    (offset: number) => {
      if (!emblaApi) return
      const current = emblaApi.selectedScrollSnap()
      emblaApi.scrollTo(current + offset)
    },
    [emblaApi]
  )

  const pageCount = useMemo(() => {
    return Math.max(1, Math.ceil(slides.length / pageSize))
  }, [slides.length, pageSize])

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

  // Keep initial detection only (no resize handling required per request)
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  }, []);

  // Ensure the preview video element reloads/plays when selectedImage changes
  useEffect(() => {
    const v = previewVideoRef.current
    if (!v) return

    if (selectedImage?.video) {
      // Pause, reload the new source, and attempt to play
      try {
        v.pause()
        v.load()
        const p = v.play()
        if (p && typeof p.then === 'function') p.catch(() => {})
      } catch {
        // ignore
      }
    } else {
      // If selected is not video, pause any preview video
      try { v.pause() } catch {}
    }
  }, [selectedImage])

  return (
    <div className={`mc2f${isMobile ? ' mc2f--mobile' : ''}`}>
      <div className="mc2f__preview"
           style={{
             minHeight: isMobile ? '60vh' : 'unset',
             width: isMobile ? '100%' : '100%',
           }}
      >
        {selectedImage.video ? (
          <video
            key={selectedImage?.src}
            ref={previewVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
              height: isMobile ? 'auto' : '60vh',
              width: isMobile ? '100%' : 'unset',
            }}
          >
            <source src={selectedImage?.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={selectedImage?.src}
            alt={selectedImage?.alt ?? ''}
            onClick={() => previewImageHandler(selectedImage)}
            onContextMenu={(e) => e.preventDefault()}
            style={{cursor: 'zoom-in'}}
          />
        )}
      </div>

      <div className="mc2f-slide__meta">
        {showTitle && slides[selectedIndex]?.title && slides[selectedIndex].title.length > 0 && (
          <div className="mc2f-slide__title">
            {slides[selectedIndex]?.title}
          </div>
        )}

        {showDescription && slides[selectedIndex]?.description && slides[selectedIndex].description.length > 0 && (
          <>
            {showDisclaimer && disclaimer && (
              <div className="mc2f-slide__disclaimer">
                {disclaimer}
              </div>
            )}
            <div className="mc2f-slide__description">
              {slides[selectedIndex]?.description}
            </div>
          </>
        )}
      </div>

      <div className="mc2f__thumbbar">
        <button
          aria-label="Previous"
          type="button"
          className="mc2f__arrow"
          onClick={() => scrollBy(-pageSize)}
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

        <div className="embla mc2f__embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div
              className="embla__container"
              style={{['--thumb-h' as any]: `${thumbHeight}px`}}
            >
              {slides.map((s, i) => (
                <button
                  key={`${s.src}-${i}`}
                  type="button"
                  className={`mc2f__thumb ${i === selectedIndex ? 'is-selected' : ''}`}
                  onClick={() => onThumbClick(i)}
                  title={s.title ?? s.alt ?? ''}
                >
                  {s.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="none"
                      style={{
                        objectFit: 'cover',
                        cursor: 'pointer',
                        height: 'inherit',
                        width: isMobile ? '125px' : 'min-content !important',
                      }}
                    >
                      <source src={s.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      className="mc2f__thumbImg"
                      src={s.thumb ?? s.src} alt={s.alt ?? ''}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          aria-label="Next"
          type="button"
          className="mc2f__arrow"
          onClick={() => scrollBy(pageSize)}
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

      {showDots && (
        <div className="mc2f__dots">
          {Array.from({length: pageCount}).map((_, p) => (
            <button
              key={p}
              type="button"
              className={`mc2f__dot ${p === currentPage ? 'is-active' : ''}`}
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
