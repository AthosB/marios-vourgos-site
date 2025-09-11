import styles from './FashionItem.module.scss';

interface FashionItemProps {
  image?: string;
  description?: string;
}

export default function FashionItem({
  image,
  description,
}: FashionItemProps) {
  return (
    <div className={styles.FashionItem}>
      <div className={styles.Image}>
        {image && <img src={image} alt="Fashion Photo" height={420} />}
      </div>
      <div className={styles.Descripion}>
        {description}
      </div>
    </div>
  );
}