// File: `src/components/UI/ImageZoomer/ImageZoomer2.tsx`
import {
  FC,
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from "react";

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export interface ImageZoomer2Props {
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

export const ImageZoomer2: FC<ImageZoomer2Props> = ({
  src,
  alt = "",
  minScale = 1,
  maxScale = 10,
  step = 0.25,
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
  const [baseWidth, setBaseWidth] = useState<number | null>(null);
  const [baseHeight, setBaseHeight] = useState<number | null>(null);
  const [transformOrigin, setTransformOrigin] = useState<string>("50% 50%");

  const effectiveScale = scale ?? internalScale;
  const isZoomed = effectiveScale > initialScale;

  const [tx, setTx] = useState<number>(0);
  const [ty, setTy] = useState<number>(0);

  const draggingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  const updateScale = useCallback(
    (nextScale: number) => {
      const clamped = clamp(nextScale, minScale, maxScale);
      if (scale === undefined) setInternalScale(clamped);
      if (onScaleChange) onScaleChange(clamped);
    },
    [minScale, maxScale, scale, onScaleChange]
  );

  // viewport-based translate bounds using base (rendered at scale=1) image size
  const getTranslateBounds = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const bw = baseWidth ?? (imgRef.current?.clientWidth || 0);
    const bh = baseHeight ?? (imgRef.current?.clientHeight || 0);

    const scaledW = bw * effectiveScale;
    const scaledH = bh * effectiveScale;

    // how much the scaled image exceeds the viewport; half on each side when centered
    const maxX = Math.max(0, (scaledW - vw) / 2);
    const maxY = Math.max(0, (scaledH - vh) / 2);

    return { maxX, maxY, vw, vh, scaledW, scaledH, bw, bh };
  }, [effectiveScale, baseWidth, baseHeight]);

  // clamp translate whenever scale changes (reset when fully zoomed out)
  useEffect(() => {
    const { maxX, maxY } = getTranslateBounds();
    if (effectiveScale <= initialScale) {
      setTx(0);
      setTy(0);
      setTransformOrigin("50% 50%");
      return;
    }
    setTx((t) => clamp(t, -maxX, maxX));
    setTy((t) => clamp(t, -maxY, maxY));
  }, [effectiveScale, initialScale, getTranslateBounds]);

  // dragging handlers
  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      // right click -> zoom out centered
      if (e.button === 2) {
        // keep centered zoom behavior
        const next = effectiveScale - step;
        const clamped = clamp(next, minScale, maxScale);
        if (clamped !== effectiveScale) {
          // scale pan proportionally so center remains anchored
          setTx((t) => (effectiveScale > 0 ? t * (clamped / effectiveScale) : t));
          setTy((t) => (effectiveScale > 0 ? t * (clamped / effectiveScale) : t));
          setTransformOrigin("50% 50%");
          updateScale(clamped);
        }
        return;
      }

      // left click: start drag
      if (e.button === 0) {
        draggingRef.current = true;
        lastPosRef.current = { x: e.clientX, y: e.clientY };
        if (containerRef.current) containerRef.current.style.cursor = "grabbing";
      }
    },
    [effectiveScale, minScale, maxScale, step, updateScale]
  );

  useEffect(() => {
    const onMove = (ev: globalThis.MouseEvent) => {
      if (!draggingRef.current || !lastPosRef.current) return;
      const curX = ev.clientX;
      const curY = ev.clientY;
      const dx = curX - lastPosRef.current.x;
      const dy = curY - lastPosRef.current.y;
      lastPosRef.current = { x: curX, y: curY };

      const { maxX, maxY } = getTranslateBounds();
      setTx((t) => clamp(t + dx, -maxX, maxX));
      setTy((t) => clamp(t + dy, -maxY, maxY));
    };

    const onUp = () => {
      if (draggingRef.current && containerRef.current) {
        containerRef.current.style.cursor = "default";
      }
      draggingRef.current = false;
      lastPosRef.current = null;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [getTranslateBounds]);

  const onImageLoad = () => {
    if (!imgRef.current) return;
    const img = imgRef.current;
    // compute base rendered size constrained to viewport so the image is initially centered and fits
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // prefer the actual rendered client size (e.g. CSS max constraints), but ensure it fits within viewport
    const renderedW = img.clientWidth || img.naturalWidth || 0;
    const renderedH = img.clientHeight || img.naturalHeight || 0;

    // scale down to fit viewport if necessary (keep aspect)
    const fitMaxW = Math.round(vw * 0.9);
    const fitMaxH = Math.round(vh * 0.9);

    let chosenW = renderedW;
    let chosenH = renderedH;
    if (chosenW > fitMaxW || chosenH > fitMaxH) {
      const ratio = Math.min(fitMaxW / renderedW, fitMaxH / renderedH);
      chosenW = Math.round(renderedW * ratio);
      chosenH = Math.round(renderedH * ratio);
    }

    setBaseWidth(chosenW || renderedW || img.naturalWidth || 0);
    setBaseHeight(chosenH || renderedH || img.naturalHeight || 0);

    // reset pan and scale to initial
    setTx(0);
    setTy(0);
    setTransformOrigin("50% 50%");
    if (scale === undefined) setInternalScale(initialScale);
  };

  // centered zoom used by slider/buttons
  const setScaleCentered = useCallback(
    (nextScale: number) => {
      const clamped = clamp(nextScale, minScale, maxScale);
      const prev = effectiveScale;
      if (clamped === prev) return;

      // scale existing pan so the visual center remains anchored
      setTx((t) => (prev > 0 ? t * (clamped / prev) : t));
      setTy((t) => (prev > 0 ? t * (clamped / prev) : t));

      setTransformOrigin("50% 50%");
      updateScale(clamped);
    },
    [effectiveScale, minScale, maxScale, updateScale]
  );

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setScaleCentered(v);
  };

  const zoomIn = () => setScaleCentered(effectiveScale + step);
  const zoomOut = () => setScaleCentered(effectiveScale - step);

  type ExtendedImageStyle = CSSProperties & {
    WebkitUserDrag?: string;
  };

  const containerStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1600,
    background: "transparent",
    ...style,
  };

  const imageStyle: ExtendedImageStyle = {
    // base size is set via inline style if we computed it; otherwise let it size naturally but constrained to viewport
    width: baseWidth ? `${baseWidth}px` : "auto",
    height: baseHeight ? `${baseHeight}px` : "auto",
    maxWidth: baseWidth ? undefined : "90vw",
    maxHeight: baseHeight ? undefined : "90vh",
    objectFit: "contain",
    transform: `translate(${tx}px, ${ty}px) scale(${effectiveScale})`,
    transformOrigin,
    transition: draggingRef.current ? "none" : "transform 0.12s ease-out",
    cursor: isZoomed ? "grab" : "crosshair",
    userSelect: "none",
    WebkitUserDrag: "none",
    ...imgStyle,
  };

  const controlsStyle: CSSProperties = {
    position: "fixed",
    bottom: 32,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 8,
    alignItems: "center",
    background: "rgba(0,0,0,0.45)",
    padding: "6px 8px",
    borderRadius: 6,
    zIndex: 2000,
  };

  const btnStyle: CSSProperties = {
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
    padding: "4px 8px",
    cursor: "pointer",
    borderRadius: 4,
  };

  const sliderStyle: CSSProperties = {
    width: 160,
  };

  return (
    <div
      ref={containerRef}
      className={(className || "") + " ImageZoomerContainer"}
      style={containerStyle}
      onMouseDown={handleMouseDown}
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
        onDragStart={(e) => e.preventDefault()}
      />

      <div style={controlsStyle} aria-hidden={false}>
        <button type="button" onClick={zoomOut} style={btnStyle} aria-label="Zoom out">
          −
        </button>
        <input
          type="range"
          min={minScale}
          max={maxScale}
          step={step}
          value={effectiveScale}
          onChange={onSliderChange}
          style={sliderStyle}
          aria-label="Zoom level"
        />
        <button type="button" onClick={zoomIn} style={btnStyle} aria-label="Zoom in">
          +
        </button>
      </div>
    </div>
  );
};
