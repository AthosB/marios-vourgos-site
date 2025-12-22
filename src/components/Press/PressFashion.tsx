import {useState} from "react";
import {GenericItemType} from "@/Types/types";
import {fashionPressEntries} from "@/assets/enhancedValues";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

export default function PressFashion() {
  /** HOOKS **/
  const [selectedFashionPress, setSelectedFashionPress] = useState<GenericItemType | null>(fashionPressEntries[0]);
  const [openPhotoViewer, setOpenPhotoViewer] = useState(false);

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const selectFashionPress = (newsItem: GenericItemType) => {
    if (!newsItem) return;
    setSelectedFashionPress(newsItem);
    // localStorage.setItem('previewData', JSON.stringify(newsItem));
    // window.location.href = '/view';
  };

  const viewPressItemHandler = (newsItem: GenericItemType) => {
    if (!newsItem) return;
    localStorage.setItem('previewData', JSON.stringify(newsItem));
    // window.location.href = '/view';
    setOpenPhotoViewer(true);
  }

  const closePhotoViewerHandler = () => {
    setOpenPhotoViewer(false);
  }

  /** RENDER **/
  return (

    <div id="press-fashion" className="preview-canvas">
      <img
        src={selectedFashionPress?.src || '/images/fashion/fashion_01.jpg'}
        alt={selectedFashionPress?.title || "Fashion-Press"}
        width={360}
        style={{marginBottom: '16px'}}
        onClick={() => viewPressItemHandler(selectedFashionPress as GenericItemType)}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className={'ImageTitle'}>{selectedFashionPress?.title}</div>
      <div className={'ImageDescription'}>{selectedFashionPress?.description}</div>
      <SliderCarousel
        items={fashionPressEntries}
        showTitle={false}
        showDescription={false}
        showDots={true}
        showArrows={!isMobile}
        onSelect={selectFashionPress}
        style={{marginBottom: '16px'}}
      />
      <PhotoViewer
        open={openPhotoViewer}
        onClose={closePhotoViewerHandler}
      />
    </div>
  );
}