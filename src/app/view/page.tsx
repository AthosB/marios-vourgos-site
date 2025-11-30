'use client'

import styles from './View.module.scss'
import {GenericItemType} from "@/Types/types";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {ZoomImage} from "@/components/UI/ImageZoomer/ImageZoomer";

export default function View() {
  /** PRES **/
  const storedData = localStorage.getItem('previewData');
  const previewData = storedData ? JSON.parse(storedData) as GenericItemType : null;
  const showDisclaimer = (previewData && previewData.src && previewData.src.includes('photography')) as boolean;

  /** CONSTS **/

  const backButtonClickHandler = () => {
    // localStorage.removeItem('previewData');
    window.history.back();
  }

  /** RENDER **/
  if(!previewData) return null;
  return (
    <div className={styles.ViewPage + ' ViewPage'}>
      <CloseIcon
        onClick={backButtonClickHandler}
        style={{position: 'absolute', top: '16px', right: '16px', zIndex: 3000, cursor: 'pointer'}}
        fontSize={'large'}
      />
      <div className={styles.Photo + ' Photo'}>
        <ZoomImage
          src={previewData.src} 
          alt={"Preview"}
          style={{display: 'inline-block', width: 'auto', margin: '0 auto', maxWidth: '100%' }}
        />
        {/*<img*/}
        {/*  src={previewData.src}*/}
        {/*  alt="Preview"*/}
        {/*  style={{ width: 'auto', display: 'block', margin: '0 auto', maxWidth: '100%' }}*/}
        {/*  draggable={false}*/}
        {/*  onContextMenu={(e) => e.preventDefault()}*/}
        {/*  onDragStart={(e) => e.preventDefault()}*/}
        {/*/>*/}
        <div className={'ImageTitle'}>{previewData?.title}</div>
        <div className={'ImageDescription'} style={{textAlign: 'center'}}>{previewData?.description}</div>
        {showDisclaimer && <div className={'ImageDisclaimer'}>Disclaimer: All photos are original photos as shot without any digital
          manipulation</div>}
      </div>
    </div>
  );
}