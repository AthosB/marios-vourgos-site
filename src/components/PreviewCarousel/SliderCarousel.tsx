import { useRef } from 'react';
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
}

export default function SliderCarousel({
  items = [],
  onSelect,
  height = '256px'
}: SliderCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useDragScroll(containerRef);

  return (
    <div className={styles.SliderCarousel} style={{ height }}>
      {items.length > 0 ? (
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
                  height={height}
                  style={{ objectFit: 'cover', marginTop: '1px' }}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  height={height}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}