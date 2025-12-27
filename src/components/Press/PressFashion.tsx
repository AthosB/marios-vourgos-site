import {fashionPressEntries} from "@/assets/enhancedValues";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function PressFashion() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return (
    <div id="press-fashion" className="preview-canvas">
      <MediaCarousel
        items={fashionPressEntries}
        showCanvas
        showTitle={true}
        showDescription={true}
        showDots={!isMobile}
        showArrows
      />
    </div>
  );
}