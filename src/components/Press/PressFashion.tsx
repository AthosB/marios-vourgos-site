import {fashionPressEntries} from "@/assets/enhancedValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function PressFashion() {
  /** RENDER **/
  return (
    <div id="press-fashion" className="preview-canvas">
      <DynamicCarousel
        slides={fashionPressEntries}
        showTitle={true}
        showDescription={true}
        showDisclaimer={false}
      />
    </div>
  );
}