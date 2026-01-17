import {pressPaintings02} from "@/assets/enhancedValues";
import CustomEmblaCarousel from "@/components/UI/CustomEmblaCarousel/CustomEmblaCarousel";

export default function PressPaintings() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return (
    <div id="press-paintings" className="preview-canvas" style={{width: '100%',margin: '0 auto'}}>
      <CustomEmblaCarousel
        slides={pressPaintings02}
        pageSize={5}
        showDots={!isMobile}
        dragFree={false}
        showTitle={true}
        showDescription={true}
      />
    </div>
  );
}