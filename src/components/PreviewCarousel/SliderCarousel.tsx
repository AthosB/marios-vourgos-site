import React, { useRef, useState, useEffect, useCallback, CSSProperties } from 'react';
import styles from './SliderCarousel.module.scss';
import { GenericItemType } from '@/Types/types';
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
  /** HOOKS **/
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(0);

  useDragScroll(containerRef);

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const computePages = useCallback(() => {
    const el = containerRef.current;
    if (!el) {
      setPages([]);
      return;
    }
    const viewport = el.clientWidth || 0;
    const total = el.scrollWidth || 0;
    if (viewport <= 0 || total <= 0) {
      setPages([0]);
      return;
    }

    const positions = new Set<number>();
    // step by viewport width to create responsive pages
    for (let pos = 0; pos < total; pos += viewport) {
      // clamp last pages so they align to show the right-most content
      positions.add(Math.min(pos, Math.max(0, total - viewport)));
    }
    // ensure final page covers the end
    positions.add(Math.max(0, total - viewport));

    const arr = Array.from(positions).sort((a, b) => a - b);
    setPages(arr);
    // adjust active page if out of range
    setActivePage((prev) => Math.min(prev, Math.max(0, arr.length - 1)));
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

    // ResizeObserver for responsive changes
    const ro = new ResizeObserver(computePages);
    ro.observe(el);

    // window resize fallback
    window.addEventListener('resize', computePages);

    return () => {
      images.forEach((img) => img.removeEventListener('load', onImgLoad));
      ro.disconnect();
      window.removeEventListener('resize', computePages);
    };
  }, [items, computePages]);

  // efficient scroll handler using rAF
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!pages.length) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          const left = el.scrollLeft;
          // find nearest page
          let nearest = 0;
          let minDist = Math.abs(pages[0] - left);
          for (let i = 1; i < pages.length; i++) {
            const d = Math.abs(pages[i] - left);
            if (d < minDist) {
              minDist = d;
              nearest = i;
            }
          }
          setActivePage(nearest);
          ticking = false;
        });
        ticking = true;
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    // set initial active
    onScroll();

    return () => el.removeEventListener('scroll', onScroll);
  }, [pages]);

  const goToPage = (index: number) => {
    const el = containerRef.current;
    if (!el || !pages.length) return;
    const pos = pages[Math.max(0, Math.min(index, pages.length - 1))];
    el.scrollTo({ left: pos, behavior: 'smooth' });
    setActivePage(index);
  };

  /** RENDER **/
  return (
    <div className={styles.SliderCarousel} style={{ ...style, height }}>
      {items.length > 0 ? (
        <>
          <div
            ref={containerRef}
            className={styles.ItemsContainer}
            tabIndex={0}
            style={{ touchAction: 'pan-y' }}
            aria-roledescription="carousel"
          >
            {items.map((item: GenericItemType, itemIndex: number) => (
              <div
                key={`slider-item-${itemIndex}`}
                className={styles.SliderItem}
                style={{ height, width: 'min-content', display: 'inline-block', margin: '0 16px 16px 0' }}
                onClick={() => {
                  if (onSelect) onSelect(item);
                }}
              >
                {item.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    height={height ? height : isMobile ? 124 : 256}
                    width={isMobile ? 164 : 'min-content !important'}
                    style={{ objectFit: 'cover', marginTop: '1px' }}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    height={height ? height : isMobile ? item.video ? 94 : 128 : 256}
                    width={isMobile ? 'unset' : 'min-content !important'}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                )}
              </div>
            ))}
          </div>

          {showDots && pages.length > 1 ? (
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
                    // background: i === activePage ? '#222' : '#ccc',
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