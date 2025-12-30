import {pressPaintings02} from "@/assets/enhancedValues";
import MediaCarousel from "@/components/UI/MediaCarousel/MediaCarousel";

export default function PressPaintings() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  /** RENDER **/
  return (
    <div id="press-paintings" className="preview-canvas" style={{width: '100%',margin: '0 auto'}}>
      <MediaCarousel
        items={pressPaintings02}
        showCanvas
        showTitle={true}
        showDescription={true}
        showDots={!isMobile}
        showArrows
        style={{width: '100%', margin: '0 auto'}}
      />
    </div>
  );
}