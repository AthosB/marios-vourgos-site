import {fashionPressEntries} from "@/assets/enhancedValues";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function PressFashion() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return (
    <div id="press-fashion" className="preview-canvas">
      <CustomEmblaCarousel
        slides={fashionPressEntries}
        pageSize={5}
        showDots={!isMobile}
        dragFree={false}
        showTitle={true}
        showDescription={true}
      />
    </div>
  );
}