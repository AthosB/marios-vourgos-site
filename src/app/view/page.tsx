'use client'

import styles from './View.module.scss'
import {GenericItemType} from "@/Types/types";
import Image from "next/image";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

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
    <div className={styles.ViewPage}>
      <Image
        src={'/logo1080p.png'}
        alt={'Mario Logo'}
        height={64}
        width={128}
        style={{position: 'absolute', top: '16px', left: '16px', zIndex: 100}}
      />
      <CloseIcon
        onClick={backButtonClickHandler}
        style={{position: 'absolute', top: '16px', right: '16px', zIndex: 100}}
        fontSize={'large'}
      />
      <div className={styles.Photo}>
        <img
          src={previewData.src}
          alt="Preview"
          style={{ width: 'auto', display: 'block', margin: '0 auto', maxWidth: '100%' }}
        />
        <div className={'ImageTitle'}>{previewData?.title}</div>
        <div className={'ImageDescription'} style={{textAlign: 'center'}}>{previewData?.description}</div>
        {showDisclaimer && <div className={'ImageDisclaimer'}>Disclaimer: All photos are original photos as shot without any digital
          manipulation</div>}
      </div>
    </div>
  );
}