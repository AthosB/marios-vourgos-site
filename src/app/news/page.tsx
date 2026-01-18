'use client'

import styles from './newsPage.module.scss';
import '@/styles/generic-page.scss';
import Image from "next/image";

export default function AboutPage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_flower.png" alt="Flower" width={isMobile ? 16 : 32} height={isMobile ? 32 : 64}
          style={{marginRight: '12px', marginTop: '2px', marginBottom: '12px'}}
        />
        News & Events
      </div>
      <div className={'generic-items-page__line'}></div>
      <div className={styles.NewsPage}>
      </div>
    </div>
  );
}