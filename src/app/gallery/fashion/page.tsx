import '@/styles/generic-page.scss';
import Image from "next/image";
import HomeFashion from "@/components/Home/Fashion/HomeFashion";

export const generateMetadata = () => ({
  title: "Marios Vourgos - Fashion",
});

export default function FashionPage() {
  /** RENDER **/
  return (
    <div className="generic-items-page">
      <div className={'generic-items-page__header'}>
        <Image src="/images/ornament_lips.png" alt="Fashion" width={72} height={72}
          style={{marginRight: '8px', marginBottom: '12px'}}
        />
        Fashion
      </div>
      <div className={'generic-items-page__line'}></div>
      <div style={{padding: '16px 32px'}}>
        <HomeFashion dots={true} />
      </div>
    </div>
  );
}