'use client'

import React, { useCallback, useEffect, useMemo, useState, CSSProperties } from 'react'
import './CustomEmblaCarousel.scss';
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";
import {GenericItemType} from "@/Types/types";

type Props = {
  slides: GenericItemType[]
  thumbHeight?: number          // fixed thumb height
  pageSize?: number             // for arrows/dots paging
  showDots?: boolean
  dragFree?: boolean
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(n, max))
}

export default function CustomEmblaCarousel({
                                                         slides,
                                                         thumbHeight = 76,
                                                         pageSize = 5,
                                                         showDots = true,
                                                         dragFree = true,
                                                       }: Props) {
  /** STATES **/
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<GenericItemType | null>(slides[0]);
  const [openMediaViewer, setOpenMediaViewer] = useState(false);

  // Thumbs-only Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree,
    containScroll: 'keepSnaps',
    align: 'start',
  })

  const selected = slides[selectedIndex]

  // Scroll thumbs to keep the clicked thumb visible/pleasantly positioned
  const scrollThumbIntoView = useCallback(
    (api: EmblaCarouselType, index: number) => {
      const total = api.slideNodes().length
      if (total <= pageSize) {
        api.scrollTo(0)
        return
      }
      const half = Math.floor(pageSize / 2)
      const maxStart = Math.max(0, total - pageSize)
      const target = clamp(index - half, 0, maxStart)
      api.scrollTo(target)
    },
    [pageSize]
  )

  const onThumbClick = useCallback(
    (i: number) => {
      setSelectedIndex(i)            // ✅ preview changes ONLY here
      setSelectedImage(slides[i])
      if (!emblaApi) return
      scrollThumbIntoView(emblaApi, i)
    },
    [emblaApi, scrollThumbIntoView]
  )

  // Arrow paging (scroll thumb strip only; does NOT change selectedIndex)
  const scrollBy = useCallback(
    (offset: number) => {
      if (!emblaApi) return
      const current = emblaApi.selectedScrollSnap()
      emblaApi.scrollTo(current + offset)
    },
    [emblaApi]
  )

  // Optional dots = pages (based on thumb snaps, not preview selection)
  const pageCount = useMemo(() => {
    // If you want dots for "pages of 5", compute from slide count.
    return Math.max(1, Math.ceil(slides.length / pageSize))
  }, [slides.length, pageSize])

  const [currentPage, setCurrentPage] = useState(0)

  const CHEVRON_SVG_STYLE: CSSProperties = {
    display: 'block',
    width: '12px',
    height: '72px',
    // paddingTop: '16px'
  }

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

  return (
    <div className="mc2">
      {/* Static preview (NOT embla-controlled) */}
      <div className="mc2__preview">
        {selected ? (
          <img
            src={selected.src}
            alt={selected.alt ?? ''}
            onClick={() => previewImageHandler(selected)}
          />
        ) : null}
      </div>

      {/* Thumbs carousel */}
      <div className="mc2__thumbbar">
        <button
          aria-label="Previous"
          type="button"
          className="mc2__arrow"
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

        <div className="embla mc2__embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div
              className="embla__container"
              style={{ ['--thumb-h' as any]: `${thumbHeight}px` }}
            >
              {slides.map((s, i) => (
                <button
                  key={`${s.src}-${i}`}
                  type="button"
                  className={`mc2__thumb ${i === selectedIndex ? 'is-selected' : ''}`}
                  onClick={() => onThumbClick(i)}
                  title={s.title ?? s.alt ?? ''}
                >
                  <img className="mc2__thumbImg" src={s.src} alt={s.alt ?? ''} draggable={false} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          aria-label="Next"
          type="button"
          className="mc2__arrow"
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

      {/* Optional dot navigation (pages) */}
      {showDots && (
        <div className="mc2__dots">
          {Array.from({ length: pageCount }).map((_, p) => (
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
