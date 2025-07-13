import styles from './PhotographyItem.module.scss'
import Image from 'next/image'

interface PhotographyItemProps {
	photoSrc: string;
	photoAlt?: string;
	title?: string;
	description?: string;
	dimensions?: {width: number; height: number | string};
}

export default function PhotographyItem({
	                                        photoSrc = '',
	                                        photoAlt = 'Photograph',
	                                        title = 'Photograph Title',
	                                        description,
	                                        dimensions = {width: 500, height: 500},
}: PhotographyItemProps) {
  return (
    <div className={styles.PhotographyItem}>
      <div className={styles.Image}>    <Image
        src={photoSrc}
        width={dimensions.width}
        height={dimensions.height as number}
        alt={photoAlt}
      /></div>
      <div className={styles.Title}>{title}</div>
      {(description && description.length > 0) && (<div className={styles.Description}>{description}</div>)}
      <div className={styles.Dimensions}>
        {dimensions.width} x {dimensions.height} cm
      </div>
    </div>
  );
}