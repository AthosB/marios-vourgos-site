import {useState} from "react";
import {GenericItemType} from "@/Types/types";
import PreviewCarousel from "@/components/PreviewCarousel/PreviewCarousel";
import {fashionPressEntries} from "@/assets/values";

export default function PressFashion() {
  /** HOOKS **/
  const [selectedFashionPress, setSelectedFashionPress] = useState<GenericItemType | null>(fashionPressEntries[0]);

  /** CONSTS **/

  const selectFashionPress = (newsItem: GenericItemType) => {
    if (!newsItem) return;
    setSelectedFashionPress(newsItem);
    // localStorage.setItem('previewData', JSON.stringify(newsItem));
    // window.location.href = '/view';
  };

  const viewPressItemHandler = (newsItem: GenericItemType) => {
    if (!newsItem) return;
    localStorage.setItem('previewData', JSON.stringify(newsItem));
    window.location.href = '/view';
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
      />
      <div className={'ImageTitle'}>{selectedFashionPress?.title}</div>
      <div className={'ImageDescription'}>{selectedFashionPress?.description}</div>
      <PreviewCarousel
        items={fashionPressEntries}
        showTitle={false}
        showDescription={false}
        showDots={true}
        onSelect={selectFashionPress}
      />
    </div>
  );
}