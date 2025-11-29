import {useState} from "react";
import {GenericItemType} from "@/Types/types";
import {pressPaintings02} from "@/assets/values";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function PressPaintings() {
  /** HOOKS **/
  const [selectedPaintingsPress, setSelectedPaintingsPress] = useState<GenericItemType | null>(pressPaintings02[0]);

  /** CONSTS **/

  const selectPaintingsPress = (pressItem: GenericItemType) => {
    if (!pressItem) return;
    setSelectedPaintingsPress(pressItem);
    // localStorage.setItem('previewData', JSON.stringify(pressItem));
    // window.location.href = '/view';
  };

  const viewPressItemHandler = (pressItem: GenericItemType) => {
    if (!pressItem) return;
    localStorage.setItem('previewData', JSON.stringify(pressItem));
    window.location.href = '/view';
  }

  /** RENDER **/
  return (

    <div id="press-paintings" className="preview-canvas" style={{width: '100%',margin: '0 auto'}}>
      <img
        src={selectedPaintingsPress?.src || '/images/paintings/001.jpg'}
        alt={selectedPaintingsPress?.title || "Paintings-Press"}
        width={360}
        style={{marginBottom: '16px'}}
        onClick={() => viewPressItemHandler(selectedPaintingsPress as GenericItemType)}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className={'ImageTitle'}>{selectedPaintingsPress?.title}</div>
      <div className={'ImageDescription'}>{selectedPaintingsPress?.description}</div>
      <SliderCarousel
        items={pressPaintings02}
        showTitle={false}
        showDescription={false}
        showDots={false}
        showArrows={false}
        onSelect={selectPaintingsPress}
        style={{width: '100%', margin: '0 auto'}}
      />
      {/*<PreviewCarousel*/}
      {/*  items={fashionPressEntries}*/}
      {/*  showTitle={false}*/}
      {/*  showDescription={false}*/}
      {/*  showDots={true}*/}
      {/*  onSelect={selectPaintingsPress}*/}
      {/*/>*/}
    </div>
  );
}