'use client'

import {literatureTango29Carousel} from "@/assets/enhancedValues";
import {Button} from "@mui/material";
import styles from './HomeLiterature.module.scss';
import {pushAnchor} from "@/utils/helpers";
import {GenericItemType} from "@/Types/types";
import {useState} from "react";
import SliderCarousel from "@/components/PreviewCarousel/SliderCarousel";

export default function HomeLiterature() {
  /** HOOKS **/
  const [selectedPhoto, setSelectedPhoto] = useState<GenericItemType | null>(literatureTango29Carousel[0]);

  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const viewPhotoHandler = (imageData: GenericItemType) => {
    pushAnchor(`#home-literature-view-${imageData.title}`);

    const previewData = {
      src: imageData.src,
      alt: imageData.title,
      title: imageData.title,
      description: imageData.description ? imageData.description : '',
    }

    localStorage.setItem('previewData', JSON.stringify(previewData));
    window.location.href = '/view';
    // setOpenPhotoViewer(true);
  }

  const getIndexForImage = (photoData: GenericItemType) =>
    literatureTango29Carousel.findIndex(i => i.src === photoData.src);

  const selectPhotoHandler = (photoData: GenericItemType, push = true) => {
    setSelectedPhoto(photoData);
    const idx = getIndexForImage(photoData);
    if (push) {
      pushAnchor(`#home-photography-${idx >= 0 ? idx : 'selected'}`);
    }
  };

  /** RENDER **/
  return (
    <div className="preview-canvas">
      <img
        // src="/images/literature/tango-1.jpg"
        src={selectedPhoto?.src || '/images/literature/tango29/carousel/tango-kolossi-01.jpg'}
        alt="Tango 29"
        height={430}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        onClick={() => viewPhotoHandler(selectedPhoto as GenericItemType)}
      />
      <div className={'ImageTitle'}>
        <p>
          The medieval castle was transformed into a modern stage, with live theatrical characters and visual
          installations, where attendees watched the verses from Marios Vourgos’ poetry collection “Tango 29” come
          to life through a group of acclaimed artists, under the direction of theatre director Elena Sokratous.
        </p>
        <p style={{color: '#fff', fontSize: '1.2rem', fontWeight: 500, textAlign: 'center', marginTop: '16px'}}>
          Marios Vourgos donated all proceeds from the sale of books to the One Dream One Wish charity foundation. (for children with cancer), as well as from sponsors totaling to 30,000 Euros. &hearts;
        </p>
        <div className={styles.Action}>
          <a
            href={'https://www.tango29.eu/'}
            target="_blank"
            rel={'noreferrer'}
            style={{margin: '0 auto'}}
            title="Tango 29 (opens in a new tab)"
          >
            <Button
              variant="contained"
              color="warning"
            >
              More
            </Button>
          </a>
        </div>
      </div>
      <SliderCarousel
        items={literatureTango29Carousel}
        showTitle={false}
        showDescription={false}
        showDots={!isMobile}
        showArrows={!isMobile}
        onSelect={selectPhotoHandler}
        style={{margin: '16px 0'}}
      />
    </div>
  );
}