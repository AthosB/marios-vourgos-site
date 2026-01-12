'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '@/styles/generic-page.scss';

import HomePaintings from "@/components/Home/Paintings/HomePaintings";
import Image from "next/image";

export default function PaintingsPage() {

  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_bird.png" alt="Paintings" width={72} height={72}
          style={{marginRight: '8px', marginBottom: '12px'}}
        />
        Paintings
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{padding: '16px 32px'}}>
        <HomePaintings />
      </div>
    </div>
  );
}