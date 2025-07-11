import styles from './Home.module.scss'
import Image from 'next/image'
import SectionSeparator from "@/components/SectionSeparator/SectionSeparator";
import {aboutText} from "@/assets/values";
import PaintingsSection from "@/components/Home/PaintingsSection";

export default function HomePage() {
  return (
    <div className={'HomePage ' + styles.Home}>
      <div className={styles.Section}>
        <div style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <div className={'LargeTitle'}>VIDEO HERE</div>
        </div>
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
      <div className={styles.Section + ' ' + styles.Purple + ' ' + styles.InLine}>
        <div style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
          <div className="LargeTitle">Title</div>
          <div className="LargeSubtitle">Subtitle</div>
        </div>
        <div style={{width: '50%'}}>
          <div style={{height: '600px', width: '900px', backgroundColor: '#FFFFFF'}}>TEST</div>
        </div>
      </div>
      <SectionSeparator
        position="left"
        ornament={
          <img
            src="/images/ornament_flower.png"
            alt="Ornament Flower"
            width={64}
            height={64}
          />
        }
      ></SectionSeparator>
      <div className={styles.Section + ' ' + styles.Red + ' flex-column align-center'}>
        <div className="LargeTitle full-width flex-column">About</div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/About_001.JPG"
              width={1000}
              height={1000}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.aboutText} style={{fontWeight: '600'}}>{aboutText}</div>
        </div>
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
      <div className={styles.Section + ' ' + styles.Purple + ' ' + styles.InLine}>
        <PaintingsSection></PaintingsSection>
      </div>
    </div>
  );
}