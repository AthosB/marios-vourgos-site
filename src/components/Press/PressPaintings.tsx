import {pressPaintings02} from "@/assets/enhancedValues";
import DynamicCarousel from "@/components/UI/DynamicCarousel";

export default function PressPaintings() {
  /** RENDER **/
  return (
    <div id="press-paintings" className="preview-canvas" style={{width: '100%', margin: '0 auto'}}>\
      <DynamicCarousel
        slides={pressPaintings02}
        showTitle={true}
        showDescription={true}
        showDisclaimer={false}
      />
    </div>
  );
}