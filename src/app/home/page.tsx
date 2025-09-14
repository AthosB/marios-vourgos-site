import styles from './Home.module.scss'
import SectionSeparator from "@/components/SectionSeparator/SectionSeparator";
import HomeAbout from "@/components/Home/About/HomeAbout";
import HomeVideo from "@/components/Home/Video/HomeVideo";
import HomePhotography from "@/components/Home/Photography/HomePhotography";
import HomePaintings from "@/components/Home/Paintings/HomePaintings";
import HomeLiterature from "@/components/Home/Literature/HomeLiterature";
import HomeFashion from "@/components/Home/Fashion/HomeFashion";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={'HomePage ' + styles.Home}>
      <HomeVideo />
      <SectionSeparator
        position="right"
        ornament={
          <Image
            src="/images/ornament_lips.png"
            alt="Ornament Lips"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Red + ' ' + styles.Column + ' HomeSection'}>
        <div className={'section-title'}>Photography</div>
        <HomePhotography />
      </div>
      <SectionSeparator
        position="left"
        ornament={
          <Image
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
          <Image
            src="/images/ornament_bird.png"
            alt="Ornament Bird"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Purple + ' ' + styles.Column}>
        <div className={'section-title'}>Paintings</div>
        <HomePaintings />
      </div>
      <SectionSeparator
        position="right"
        ornament={
          <Image
            src="/images/ornament_lips.png"
            alt="Ornament Lips"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Red + ' ' + styles.Column}>
        <div className={'section-title'}>Fashion</div>
        <HomeFashion />
      </div>
      <SectionSeparator
        position="right"
        ornament={
          <Image
            src="/images/ornament_bird.png"
            alt="Ornament Lips"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Purple + ' ' + styles.Column}>
        <div className={'section-title'}>Literature</div>
        <HomeLiterature />
      </div>
    </div>
  );
}