import React, {useRef, useState, useEffect, useCallback, CSSProperties} from 'react';
import styles from './SliderCarousel.module.scss';
import {GenericItemType} from '@/Types/types';
import useDragScroll from '@/hooks/useDragScroll';

interface SliderCarouselProps {
  items: GenericItemType[];
  onSelect: (item: GenericItemType) => void;
  showTitle?: boolean;
  showDescription?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  height?: string | number;
  style?: CSSProperties;
}

export default function SliderCarousel({
                                         items = [],
                                         onSelect,
                                         height,
                                         showDots = true,
                                         style = {},
                                       }: SliderCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(0);

  useDragScroll(containerRef);

  const isMobile = window.innerWidth <= 768;

  // refs to avoid re-renders and to track active user interaction
  const isInteractingRef = useRef(false);
  const lastPagesRef = useRef<number[]>([]);

  // computePages: only update state if pages actually changed and skip while interacting
  const computePages = useCallback(() => {
    if (isInteractingRef.current) return; // avoid layout changes while the user is interacting
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

    // only update state when pages actually changed
    const old = lastPagesRef.current;
    if (old.length === arr.length && arr.every((v, i) => v === old[i])) {
      // no change
    } else {
      lastPagesRef.current = arr;
      setPages(arr);
      setActivePage((prev) => Math.min(prev, Math.max(0, arr.length - 1)));
    }
  }, []);

  useEffect(() => {
    computePages();
    const el = containerRef.current;
    if (!el) return;

    // recompute when images load (they affect scrollWidth)
    const images = Array.from(el.querySelectorAll('img'));
    const onImgLoad = () => computePages();
    images.forEach((img) => {
      if ((img as HTMLImageElement).complete) return;
      img.addEventListener('load', onImgLoad);
    });

    const ro = new ResizeObserver(computePages);
    ro.observe(el);

    window.addEventListener('resize', computePages);

    // listen for pointer/touch interaction start/end so we can avoid recomputing during drag
    const onPointerDown = () => {
      isInteractingRef.current = true;
    };
    const onPointerUp = () => {
      isInteractingRef.current = false;
    };
    el.addEventListener('pointerdown', onPointerDown, {passive: true});
    window.addEventListener('pointerup', onPointerUp, {passive: true});
    el.addEventListener('touchstart', onPointerDown, {passive: true});
    window.addEventListener('touchend', onPointerUp, {passive: true});

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

  // optimized scroll handler: only update the active page if it actually changed
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!pages.length) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          const left = el.scrollLeft;
          let nearest = 0;
          let minDist = Math.abs(pages[0] - left);
          for (let i = 1; i < pages.length; i++) {
            const d = Math.abs(pages[i] - left);
            if (d < minDist) {
              minDist = d;
              nearest = i;
            }
          }
          // update only if different
          setActivePage((prev) => (prev === nearest ? prev : nearest));
          ticking = false;
        });
        ticking = true;
      }
    };
    el.addEventListener('scroll', onScroll, {passive: true});
    onScroll();

    return () => el.removeEventListener('scroll', onScroll);
  }, [pages]);

  const goToPage = (index: number) => {
    const el = containerRef.current;
    if (!el || !pages.length) return;
    const pos = pages[Math.max(0, Math.min(index, pages.length - 1))];
    el.scrollTo({left: pos, behavior: 'smooth'});
    setActivePage(index);
  };

  return (
    <div className={styles.SliderCarousel} style={{...style, height}}>
      {items.length > 0 ? (
        <>
          <div
            ref={containerRef}
            className={styles.ItemsContainer}
            tabIndex={0}
            style={{touchAction: 'pan-y'}}
            aria-roledescription="carousel"
          >
            {items.map((item: GenericItemType, itemIndex: number) => (
              <div
                key={`slider-item-${itemIndex}`}
                className={styles.SliderItem}
                style={{height, width: 'min-content', display: 'inline-block', margin: '0 16px 16px 0'}}
                onClick={() => {
                  if (onSelect) onSelect(item);
                }}
              >
                {item.video ? (
                  <div
                    className={'Shimmer'}
                    style={{
                      height: height ? height : isMobile ? 124 : 256,
                      width: isMobile ? 164 : 'min-content !important',
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      height={height ? height : isMobile ? 124 : 256}
                      width={isMobile ? 164 : 'min-content !important'}
                      style={{objectFit: 'cover'}}
                    >
                      <source src={item.src} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div
                    className={'Shimmer'}
                    style={{
                      height: height ? height : isMobile ? 124 : 256,
                      width: 'min-content !important',
                      minWidth: isMobile ? item.landscape ? 124 : 72 : 164,
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      height={height ? height : isMobile ? item.video ? 94 : 128 : 256}
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

          {showDots && pages.length > 1 ? (
            <div className={styles.DotsContainer} aria-hidden={false} style={{marginTop: 12, textAlign: 'center'}}>
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
        </>
      ) : null}
    </div>
  );
}
