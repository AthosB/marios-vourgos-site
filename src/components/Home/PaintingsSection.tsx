import './PaintingsSection.scss';
import Image from 'next/image'

export default function PaintingsSection() {
  /** RENDER **/
  return (
    <div className="PaintingsSection">
      <div className="PaintingsSection__discover">
        <div className="CTA_arrow">
          <img
            src="/images/arrow_back.png"
            alt="Discover Arrow"
            className="CTA_arrow__image"
          />
        </div>
        <div>
          <div>Discover</div>
          <div>Artwork</div>
        </div>
      </div>
      <div className="PaintingsSection__toolbar">A collection of my artworks</div>
      <div className="PaintingsSection__gallery">
        {/* Gallery items would go here */}
      </div>
    </div>
  );
}