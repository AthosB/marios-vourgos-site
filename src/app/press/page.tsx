'use client';

import styles from './pressPage.module.scss';
import PressFashion from "@/components/Press/PressFashion";

export default function PressPage() {
  /** RENDER */
  return (
    <div className={styles.NewsPage}>
      <div className={'section-title'} style={{width: '100%'}}>Fashion</div>
      <PressFashion />
    </div>
  );
}