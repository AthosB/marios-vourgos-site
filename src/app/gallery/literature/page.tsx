'use client'

import '@/styles/generic-page.scss';
import Image from "next/image";
import HomeLiterature from "@/components/Home/Literature/HomeLiterature";

export default function LiteraturePage() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image
          src="/images/ornament_bird_2.png"
          alt="literature" width={72} height={54}
          style={{marginRight: '12px', marginBottom: '12px'}}
        />
        Literature
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{width: isMobile ? '100vw' : '95vw', margin: '0 auto', padding: isMobile ? 0 : '16px 32px'}}>
        <HomeLiterature />
      </div>
    </div>
  );
}