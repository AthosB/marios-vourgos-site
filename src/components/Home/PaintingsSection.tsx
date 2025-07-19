import './PaintingsSection.scss';
import StraightIcon from '@mui/icons-material/Straight';

export default function PaintingsSection() {
  /** RENDER **/
  return (
    <div className="PaintingsSection">
      <div className="PaintingsSection__discover">
        <div className="CTA_arrow">
          <StraightIcon fontSize={'large'} style={{transform: 'rotate(180deg)'}} />
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