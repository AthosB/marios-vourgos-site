import Image, { ImageProps } from "next/image";

type CarouselImageProps = Omit<ImageProps, "width" | "height" | "fill"> & {
  fixedHeight: number;       // e.g. 96
  isMobile?: boolean;
};

export function CarouselImage({
  fixedHeight,
  isMobile,
  style,
  ...imgProps
}: CarouselImageProps) {
  return (
    <div
      style={{
        position: "relative",
        height: isMobile ? fixedHeight * 0.8 : fixedHeight, // your 77 / 96 logic
        width: "100%", // or let your carousel cell control this
        overflow: "hidden",
      }}
    >
      <Image
        {...imgProps}
        alt={imgProps.alt || "Carousel Image"}
        fill
        sizes="(max-width: 768px) 80vw, 25vw" // adjust for your layout
        style={{
          objectFit: "contain", // or "cover" if you prefer cropping
          ...style,
        }}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}
