import '@/styles/generic-page.scss';
import Image from "next/image";
import HomeLiterature from "@/components/Home/Literature/HomeLiterature";

export const generateMetadata = () => ({
  title: "Marios Vourgos - Literature",
});

export default function LiteraturePage() {
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_bird_2.png" alt="Fashion" width={72} height={54}
          style={{marginRight: '12px', marginBottom: '12px'}}
        />
        Literature
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{padding: '16px 32px'}}>
        <HomeLiterature />
      </div>
    </div>
  );
}