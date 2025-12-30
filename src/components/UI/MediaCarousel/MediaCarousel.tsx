import React, {useRef, useState, useEffect, useCallback, CSSProperties, ReactNode} from 'react';
import styles from './MediaCarouel.module.scss';
import { GenericItemType } from '@/Types/types';
import useDragScroll from '@/hooks/useDragScroll';
import PreviewCanvas from "@/components/UI/MediaCarousel/PreviewCanvas";

interface MediaCarouselProps {
  items: GenericItemType[];
  onSelect?: (item: GenericItemType) => void;
  showTitle?: boolean;
  showDescription?: boolean;
  showDisclaimer?: boolean;
  disclaimerText?: string | ReactNode;
  showArrows?: boolean;
  offsetArrows?: boolean;
  showDots?: boolean;
  showCanvas?: boolean;
  height?: number | string;
  style?: CSSProperties;
}

export default function MediaCarousel(
  {
    items = [],
    onSelect,
    showTitle = false,
    showDescription = false,
    showDisclaimer = false,
    disclaimerText = "Disclaimer: All photos are original photos as shot without any digital manipulation",
    showArrows = true,
    offsetArrows = false,
    showDots = false,
    showCanvas = false,
    height,
    style = {},
  }: MediaCarouselProps
) {
  /** PRES **/
  const isMobile = window.innerWidth <= 768;

  /** HOOKS **/
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState<GenericItemType | null>(items[0] || null);
  useDragScroll(containerRef);
  const isInteractingRef = useRef(false);
  const lastPagesRef = useRef<number[]>([]);

  /** CONSTS **/
  const computePages = useCallback(() => {
    if (isInteractingRef.current) return;
    const el = containerRef.current;
    if (!el) {
      if (lastPagesRef.current.length !== 0) {
        lastPagesRef.current = [];
        setPages([]);
      }
      return;
    }
    const viewport = el.clientWidth || 0;
    const total = el.scrollWidth || 0;
    if (viewport <= 0 || total <= 0) {
      if (lastPagesRef.current.length !== 1 || lastPagesRef.current[0] !== 0) {
        lastPagesRef.current = [0];
        setPages([0]);
      }
      return;
    }

    const positions = new Set<number>();
    for (let pos = 0; pos < total; pos += viewport) {
      positions.add(Math.min(pos, Math.max(0, total - viewport)));
    }
    positions.add(Math.max(0, total - viewport));
    const arr = Array.from(positions).sort((a, b) => a - b);

    const old = lastPagesRef.current;
    if (!(old.length === arr.length && arr.every((v, i) => v === old[i]))) {
      lastPagesRef.current = arr;
      setPages(arr);
      setActivePage((prev) => Math.min(prev, Math.max(0, arr.length - 1)));
    }
  }, []);

  const selectMediaHandler = (item: GenericItemType) => {
    if (showCanvas) {
      setSelectedMedia(item);
    } else {
      if (onSelect) onSelect(item);
    }
  }

  const findNearestPageIndex = (left: number) => {
    if (!pages.length) return 0;
    let nearest = 0;
    let minDist = Math.abs(pages[0] - left);
    for (let i = 1; i < pages.length; i++) {
      const d = Math.abs(pages[i] - left);
      if (d < minDist) {
        minDist = d;
        nearest = i;
      }
    }
    return nearest;
  };

  const goToPage = (index: number) => {
    const el = containerRef.current;
    if (!el || !pages.length) return;
    const clamped = Math.max(0, Math.min(index, pages.length - 1));
    const pos = pages[clamped];
    el.scrollTo({ left: pos, behavior: 'smooth' });
    setActivePage(clamped);
    setScrollLeftPos(pos);
  };

  const getItemFullWidth = () => {
    const el = containerRef.current;
    if (!el) return 164;
    const first = el.querySelector('[data-slider-item]') as HTMLElement | null;
    if (!first) return 164;
    const style = window.getComputedStyle(first);
    const marginRight = parseFloat(style.marginRight || '0') || 0;
    return first.offsetWidth + marginRight;
  };

  const computeStepPixels = () => {
    const el = containerRef.current;
    if (!el) return 164;
    const viewport = el.clientWidth || 1;
    const itemW = getItemFullWidth();
    const itemsPerViewport = Math.max(1, Math.floor(viewport / itemW));
    const stepItems = Math.max(1, itemsPerViewport - 1);
    return itemW * stepItems;
  };

  const clamp = (v: number, a = 0, b = Infinity) => Math.min(Math.max(v, a), b);

  const goByPixels = (delta: number) => {
    const el = containerRef.current;
    if (!el) return;
    const maxLeft = Math.max(0, el.scrollWidth - el.clientWidth);
    const target = clamp(el.scrollLeft + delta, 0, maxLeft);
    el.scrollTo({ left: target, behavior: 'smooth' });
    setScrollLeftPos(target);
    setActivePage(findNearestPageIndex(target));
  };

  const goToNext = () => {
    const pixels = computeStepPixels();
    goByPixels(pixels);
  };

  const goToPrev = () => {
    const pixels = computeStepPixels();
    goByPixels(-pixels);
  };

  const elNow = containerRef.current;
  const maxScrollLeft = elNow ? Math.max(0, elNow.scrollWidth - elNow.clientWidth) : 0;
  const epsilon = 1;
  const leftDisabled = scrollLeftPos <= epsilon;
  const rightDisabled = scrollLeftPos >= Math.max(0, maxScrollLeft - epsilon);

  /** EFFECTS **/
  useEffect(() => {
    computePages();
    const el = containerRef.current;
    if (!el) return;

    const images = Array.from(el.querySelectorAll('img'));
    const onImgLoad = () => computePages();
    images.forEach((img) => {
      if ((img as HTMLImageElement).complete) return;
      img.addEventListener('load', onImgLoad);
    });

    const ro = new ResizeObserver(computePages);
    ro.observe(el);

    window.addEventListener('resize', computePages);

    const onPointerDown = () => {
      isInteractingRef.current = true;
    };
    const onPointerUp = () => {
      isInteractingRef.current = false;
    };
    el.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    el.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });

    return () => {
      images.forEach((img) => img.removeEventListener('load', onImgLoad));
      ro.disconnect();
      window.removeEventListener('resize', computePages);
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchend', onPointerUp);
    };
  }, [items, computePages]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!pages.length) {
        setScrollLeftPos(el.scrollLeft);
        return;
      }
      if (!ticking) {
        requestAnimationFrame(() => {
          const left = el.scrollLeft;
          setScrollLeftPos(left);
          let nearest = 0;
          let minDist = Math.abs(pages[0] - left);
          for (let i = 1; i < pages.length; i++) {
            const d = Math.abs(pages[i] - left);
            if (d < minDist) {
              minDist = d;
              nearest = i;
            }
          }
          setActivePage((prev) => (prev === nearest ? prev : nearest));
          ticking = false;
        });
        ticking = true;
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener('scroll', onScroll);
  }, [pages]);

  useEffect(() => {
    if (!selectedMedia?.video) return;
    const v = videoRef.current;
    if (!v) return;
    try { v.load(); } catch { /* noop */ }
    v.play && v.play().catch(() => { /* autoplay may be blocked */ });
  }, [selectedMedia?.src, selectedMedia?.video]);

  /** RENDER **/
  return (
    <div className={`${styles.MediaCarousel}${isMobile ? ' ' + styles.Mobile : ''}`}>
      {/* PREVIEW CANVAS */}
      {showCanvas ? (
        <PreviewCanvas mediaData={selectedMedia} showCanvas={showCanvas} isMobile={isMobile} />
      ) : null}
      {/* INFO and CAROUSEL */}
      <div className={styles.Navigator}>
        <div className={styles.Info}>
          {showTitle && selectedMedia ? <div className={'ImageTitle'}>{selectedMedia.title}</div> : null}
          {showDescription && selectedMedia ? <div className={'ImageDescription'}>{selectedMedia.description}</div> : null}
          {showDisclaimer && selectedMedia ? (
            <div className={'ImageDisclaimer'}>
              {disclaimerText}
            </div>
          ) : null}
        </div>

        <div className={styles.CarouselContainer} style={{ ...style, height, position: 'relative' }}>
          {items.length > 0 ? (
            <div className={styles.SliderContainer}>
              {showArrows && items.length > 0 && <div className={styles.PreviousButton}>
                <button
                  type="button"
                  aria-label="Previous page"
                  onClick={goToPrev}
                  disabled={leftDisabled}
                  style={{
                    cursor: leftDisabled ? 'not-allowed' : 'pointer',
                    opacity: leftDisabled ? 0.5 : 1,
                    top: showDots ? '40%' : '50%',
                    marginTop: isMobile ? '-8px' : 0,
                  }}
                  className={`${offsetArrows ? ' ' + styles.Offset : ''}`}
                >
                  <svg width="18" height="24" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
                    <path d="M16 20 L8 12 L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>}
              <div
                ref={containerRef}
                className={styles.ItemsContainer}
                tabIndex={0}
                style={{ touchAction: 'pan-x' }}
                aria-roledescription="carousel"
              >
                {items.map((item: GenericItemType, itemIndex: number) => (
                  <div
                    key={`slider-item-${itemIndex}`}
                    data-slider-item
                    className={styles.SliderItem}
                    style={{ height: isMobile ? 'min-content' : 'auto', width: 'min-content', display: 'inline-block', margin: '0 16px 16px 0' }}
                  >
                    {item.video ? (
                      <div
                        className={'Shimmer'}
                        style={{
                          height: isMobile ? 74 : 96,
                          width: isMobile ? 98 : 'min-content !important',
                        }}
                        onClick={() => selectMediaHandler(item)}
                      >
                        <video
                          ref={videoRef}
                          autoPlay
                          loop
                          muted
                          playsInline
                          height={isMobile ? 74 : 96}
                          width={isMobile ? 98 : 'min-content !important'}
                          style={{ objectFit: 'cover' }}
                        >
                          <source src={item.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div
                        className={'Shimmer'}
                        style={{
                          height: height ? height : isMobile ? 74 : 96,
                          width: 'min-content !important',
                        }}
                        onClick={() => selectMediaHandler(item)}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          height={isMobile ? 77 : 96}
                          width={isMobile ? 'unset' : 'min-content !important'}
                          draggable={false}
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {showArrows && items.length > 0 && <div className={styles.NextButton}>
                <button
                  type="button"
                  aria-label="Next page"
                  onClick={goToNext}
                  disabled={rightDisabled}
                  style={{
                    cursor: rightDisabled ? 'not-allowed' : 'pointer',
                    opacity: rightDisabled ? 0.5 : 1,
                    top: showDots ? '40%' : '50%',
                    marginTop: isMobile ? '-8px' : 0,
                  }}
                  className={`${offsetArrows ? ' ' + styles.Offset : ''}`}
                >
                  <svg width="18" height="24" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
                    <path d="M8 4 L16 12 L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>}

              {showDots && !isMobile && pages.length > 1 ? (
                <div className={styles.DotsContainer} aria-hidden={false} style={{ marginTop: 12, textAlign: 'center' }}>
                  {pages.map((_, i) => (
                    <button
                      key={`dot-${i}`}
                      type="button"
                      aria-label={`Go to page ${i + 1}`}
                      aria-pressed={i === activePage}
                      onClick={() => goToPage(i)}
                      className={i === activePage ? styles.DotActive : styles.Dot}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        margin: '0 6px',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
