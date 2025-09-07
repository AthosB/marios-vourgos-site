import styles from './fashionPage.module.scss';
import FashionItem from "@/components/Fashion/FashionItem";

export const generateMetadata = () => ({
  title: "Marios Vourgos - Fashion",
});

export default function FashionPage() {
  /** CONSTS **/
  const fashionEntries = [
    {imagePath: '/images/fashion/fashion_01.jpg', description: 'Description of fashion item 1'},
    {imagePath: '/images/fashion/fashion_02.jpg', description: 'Description of fashion item 2'},
    {imagePath: '/images/fashion/fashion_03.jpg', description: 'Description of fashion item 3'},
    {imagePath: '/images/fashion/fashion_04.jpg', description: 'Description of fashion item 4'},
    {imagePath: '/images/fashion/fashion_05.jpg', description: 'Description of fashion item 5'},
    {imagePath: '/images/fashion/fashion_06.jpg', description: 'Description of fashion item 6'},
    {imagePath: '/images/fashion/fashion_07.jpg', description: 'Description of fashion item 7'},
    {imagePath: '/images/fashion/fashion_08.jpg', description: 'Description of fashion item 8'},
  ];
  /** RENDER **/
  return (
    <div className={styles.FashionPage}>
      <h1>Fashion Gallery</h1>
      <div className={styles.FashionEntries}>
        {
          fashionEntries.map((entry, index) => (
            <FashionItem key={index} image={entry.imagePath} description={entry.description} />
          ))
        }
      </div>
    </div>
  );
}