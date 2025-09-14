import styles from './fashionPage.module.scss';
import FashionPageContent from "@/components/Fashion/FashionPageContent";

export const generateMetadata = () => ({
  title: "Marios Vourgos - Fashion",
});

export default function FashionPage() {
  /** RENDER **/
  return (
    <div className={styles.FashionPage}>
      <h1>Fashion Gallery</h1>
      <FashionPageContent className={styles.FashionEntries} />
    </div>
  );
}