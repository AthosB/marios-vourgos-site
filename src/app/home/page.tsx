import styles from './Home.module.scss'
import Image from 'next/image'
import SectionSeparator from "@/components/SectionSeparator/SectionSeparator";
import {aboutText} from "@/assets/values";
import PaintingsSection from "@/components/Home/PaintingsSection";
import PhotographyCarousel from "@/components/Home/PhotographyCarousel";
import HomeAbout from "@/components/Home/About/HomeAbout";
import HomeVideo from "@/components/Home/Video/HomeVideo";
import HomePhotography from "@/components/Home/Photography/HomePhotography";
import HomePaintings from "@/components/Home/Paintings/HomePaintings";
import FashionCarousel from "@/components/Home/Fashion/FashionCarousel";

export default function HomePage() {
  return (
    <div className={'HomePage ' + styles.Home}>
      <HomeVideo />
      <SectionSeparator
        position="right"
        ornament={
          <img
            src="/images/ornament_lips.png"
            alt="Ornament Lips"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Red + ' ' + styles.Column}>
        <div className={'section-title'}>Photography</div>
        <HomePhotography />
      </div>
      <SectionSeparator
        position="left"
        ornament={
          <img
            src="/images/ornament_flower.png"
            alt="Ornament Flower"
            width={64}
            height={128}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Purple + ' flex-column align-center'}>
        <div className={'section-title'}>About</div>
        <HomeAbout />
      </div>
      <SectionSeparator
        position="center"
        ornament={
          <img
            src="/images/ornament_bird.png"
            alt="Ornament Bird"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <HomePaintings />
      <SectionSeparator
        position="right"
        ornament={
          <img
            src="/images/ornament_egg.png"
            alt="Ornament Bird"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Purple + ' ' + styles.InLine}>
        <div className={'section-title'}>Paintings</div>
        <PaintingsSection></PaintingsSection>
      </div>
      <SectionSeparator
        position="right"
        ornament={
          <img
            src="/images/ornament_lips.png"
            alt="Ornament Lips"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Red + ' ' + styles.Column}>
        <div className={'section-title'}>Fashion</div>
        <FashionCarousel />
      </div>
    </div>
  );
}