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
  const [initialImgHeight, setInitialImgHeight] = useState<number | null>(null);

  // translate in pixels (top-left origin)
  const [translateX, setTranslateX] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);

  // panning state
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const lastClientRef = useRef<{ x: number; y: number } | null>(null);

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
    if (imgRef.current) return imgRef.current.getBoundingClientRect();
    if (containerRef.current) return containerRef.current.getBoundingClientRect();
    return null;
  };

  // Compute new translate so that the point under the cursor stays fixed when scaling.
  const applyAnchoredZoom = useCallback(
    (clientX: number, clientY: number, nextScale: number) => {
      const rect = getReferenceRect();
      if (!rect) return;

      // local image coordinate before scale
      const localX = (clientX - rect.left - translateX) / effectiveScale;
      const localY = (clientY - rect.top - translateY) / effectiveScale;

      // new translate to keep same screen position for localX/localY
      const newTx = translateX + localX * (effectiveScale - nextScale);
      const newTy = translateY + localY * (effectiveScale - nextScale);

      setTranslateX(newTx);
      setTranslateY(newTy);
    },
    [translateX, translateY, effectiveScale]
  );

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      // left button -> start panning
      if (e.button === 0) {
        setIsPanning(true);
        lastClientRef.current = { x: e.clientX, y: e.clientY };
      } else if (e.button === 2) {
        // right click -> zoom out anchored at cursor
        const nextScale = clamp(effectiveScale - step, minScale, maxScale);
        applyAnchoredZoom(e.clientX, e.clientY, nextScale);
        updateScale(nextScale);
      }
    },
    [applyAnchoredZoom, effectiveScale, step, minScale, maxScale, updateScale]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isPanning) return;
      const last = lastClientRef.current;
      if (!last) return;

      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;

      lastClientRef.current = { x: e.clientX, y: e.clientY };

      setTranslateX((tx) => tx + dx);
      setTranslateY((ty) => ty + dy);
    },
    [isPanning]
  );

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
    lastClientRef.current = null;
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
      e.preventDefault();

      const rect = getReferenceRect();
      if (!rect) return;

      const delta = e.deltaY;
      const nextScale =
        delta < 0 ? effectiveScale + step : effectiveScale - step;

      const clamped = clamp(nextScale, minScale, maxScale);
      applyAnchoredZoom(e.clientX, e.clientY, clamped);
      updateScale(clamped);
    },
    [effectiveScale, step, minScale, maxScale, applyAnchoredZoom, updateScale]
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

    setInitialImgHeight(chosenHeight || null);
  };

  const containerStyle: CSSProperties = {
    position: "relative",
    // allow overflow when zoomed so sides won't clip
    overflow: isZoomed ? "visible" : "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    zIndex: 1600,
    ...(initialImgHeight
      ? { height: `${initialImgHeight}px`, maxHeight: `${initialImgHeight}px` }
      : { minHeight: "150px" }),
    ...style,
  };

  type ExtendedImageStyle = CSSProperties & {
    WebkitUserDrag?: string;
  };

  const imageStyle: ExtendedImageStyle = {
    display: "block",
    // keep natural aspect ratio and allow expansion beyond container when scaled
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: initialImgHeight ? `${initialImgHeight}px` : "none",
    objectFit: "contain",
    // translate first, then scale. transform-origin set to top-left so translations are pixel-accurate.
    transform: `translate(${translateX}px, ${translateY}px) scale(${effectiveScale})`,
    transformOrigin: "0 0",
    transition: isPanning ? "none" : "transform 0.15s ease-out",
    cursor: isPanning ? "grabbing" : "grab",
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
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
