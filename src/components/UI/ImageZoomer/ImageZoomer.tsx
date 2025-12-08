// File: src/components/UI/ImageZoomer/ImageZoomer.tsx
import {
  FC,
  CSSProperties,
  useCallback,
  useRef,
  useState,
  MouseEvent,
  WheelEvent,
} from "react";

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export interface ZoomImageProps {
  src: string;
  alt?: string;

  minScale?: number;
  maxScale?: number;
  step?: number;
  initialScale?: number;
  scale?: number;
  onScaleChange?: (scale: number) => void;

  className?: string;
  style?: CSSProperties;

  imgClassName?: string;
  imgStyle?: CSSProperties;
}

export const ZoomImage: FC<ZoomImageProps> = ({
  src,
  alt = "",
  minScale = 1,
  maxScale = 6,
  step = 0.5,
  initialScale = 1,
  scale,
  onScaleChange,
  className,
  style,
  imgClassName,
  imgStyle,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [internalScale, setInternalScale] = useState<number>(initialScale);
  const [transformOrigin, setTransformOrigin] = useState<string>("50% 50%");
  const [initialImgHeight, setInitialImgHeight] = useState<number | null>(null);
  const [initialImgWidth, setInitialImgWidth] = useState<number | null>(null);

  const effectiveScale = scale ?? internalScale;
  const isZoomed = effectiveScale > initialScale;

  const updateScale = useCallback(
    (nextScale: number) => {
      const clamped = clamp(nextScale, minScale, maxScale);

      if (scale === undefined) {
        setInternalScale(clamped);
      }

      if (onScaleChange) {
        onScaleChange(clamped);
      }
    },
    [minScale, maxScale, scale, onScaleChange]
  );

  const getReferenceRect = (): DOMRect | null => {
    // Prefer the actual image element's bounding box so clicks map to the visual image.
    if (imgRef.current) return imgRef.current.getBoundingClientRect();
    if (containerRef.current) return containerRef.current.getBoundingClientRect();
    return null;
  };

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const rect = getReferenceRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const originX = (x / rect.width) * 100;
      const originY = (y / rect.height) * 100;

      setTransformOrigin(`${originX}% ${originY}%`);

      // left click (0) -> zoom in, right click (2) -> zoom out
      if (e.button === 0) {
        updateScale(effectiveScale + step);
      } else if (e.button === 2) {
        updateScale(effectiveScale - step);
      }
    },
    [updateScale, effectiveScale, step]
  );

  const handleWheel = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
      e.preventDefault();

      const rect = getReferenceRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const originX = (x / rect.width) * 100;
      const originY = (y / rect.height) * 100;
      setTransformOrigin(`${originX}% ${originY}%`);

      if (e.deltaY < 0) {
        updateScale(effectiveScale + step);
      } else if (e.deltaY > 0) {
        updateScale(effectiveScale - step);
      }
    },
    [effectiveScale, step, updateScale]
  );

  const onImageLoad = () => {
    if (!imgRef.current) return;

    const img = imgRef.current;
    const parent = containerRef.current?.parentElement;

    const rendered = img.clientHeight || 0;
    const naturalW = img.naturalWidth || 0;
    const naturalH = img.naturalHeight || 0;

    const containerWidth =
      containerRef.current?.clientWidth ||
      parent?.clientWidth ||
      img.clientWidth ||
      0;

    const aspectHeight =
      naturalW && containerWidth
        ? Math.round((naturalH / naturalW) * containerWidth)
        : 0;

    const parentHeight = parent?.clientHeight || 0;
    const minDesiredHeight = parentHeight ? Math.round(parentHeight * 0.75) : 0;

    const chosenHeight = Math.max(
      rendered,
      aspectHeight,
      minDesiredHeight,
      naturalH,
      150
    );

    const parentWidth = parent?.clientWidth || 0;
    const minDesiredWidth = parentWidth ? Math.round(parentWidth * 0.75) : 0;
    const chosenWidth = Math.max(img.clientWidth || 0, minDesiredWidth, naturalW, 150);

    setInitialImgHeight(chosenHeight || null);
    setInitialImgWidth(chosenWidth || null);
  };

  const containerStyle: CSSProperties = {
    position: "relative",
    // toggle overflow according to zoom state: when zoomed allow visible overflow so scaled image can expand,
    // otherwise keep overflow hidden so layout stays fixed.
    overflow: isZoomed ? "visible" : "hidden",
    display: "block",
    alignContent: "center",
    width: "100%",
    zIndex: 1600,
    ...(initialImgHeight
      ? { height: `${initialImgHeight}px`, maxHeight: `${initialImgHeight}px` }
      : { minHeight: "150px" }),
    ...(initialImgWidth ? { width: `${initialImgWidth}px`, maxWidth: `${initialImgWidth}px` } : {}),
    ...style,
  };

  type ExtendedImageStyle = CSSProperties & {
    WebkitUserDrag?: string;
  };

  const imageStyle: ExtendedImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: `scale(${effectiveScale})`,
    transformOrigin,
    transition: "transform 0.15s ease-out",
    cursor: "crosshair",
    userSelect: "none",
    WebkitUserDrag: "none",
    ...imgStyle,
  };

  return (
    <div
      ref={containerRef}
      className={(className || "") + " ImageZoomerContainer"}
      style={containerStyle}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={(imgClassName || "") + " ImageZoomerImg"}
        style={imageStyle}
        draggable={false}
        onLoad={onImageLoad}
      />
    </div>
  );
};
