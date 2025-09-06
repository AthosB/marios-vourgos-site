"use client"

import {useState, useEffect} from 'react';
import styles from './photography.module.scss';
import Image from 'next/image';
import {photoFilenames} from '@/assets/values';
import PhotographyItem from "@/components/UI/PhotographyItem/PhotographyItem";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import {Tooltip} from "@mui/material";
import PhotoViewer from "@/components/UI/PhotoViewer/PhotoViewer";

type photoProps = {
	src: string;
	alt: string;
	title?: string;
	description?: string;
};


export default function PhotographyPage() {
	/** HOOKS **/
	const [showPhoto, setShowPhoto] = useState(false);
	const [targetPhoto, setTargetPhoto] = useState<photoProps | null>(null);

	/** CONSTS **/
	const photographs = photoFilenames.map((photo, index) => (
		<div
			key={`photograph-key-${index}-${photo.src}`}
			className={styles.PhotoItem}
			// style={{transform: `rotate(${Math.random() * 25 - 10}deg)`}}
		>
			<PhotographyItem
				photoSrc={photo.src}
				photoAlt={photo.alt}
				title={photo.title || `Photography ${index + 1}`}
				description={photo.description as string || undefined}
				dimensions={{width: 600, height: 500}}
				elevated
				onClick={() => handlePhotoClick(photo)}
			/>
		</div>
	));

	/** FUNCTIONS **/
	/**
	 * Handles the click event on a photo item.
	 * @param photo {photoProps} - The photo object containing the source, alt text, and optional description.
	 */
	function handlePhotoClick(photo: photoProps) {
		setTargetPhoto(photo);
		setShowPhoto(true);
	}

	/**
	 * Handles the close event of the modal.
	 */
	function handleCloseModal() {
		setShowPhoto(false);
		setTargetPhoto(null);
	}

	/** EFFECTS **/
	useEffect(() => {
		document.title = 'Marios Vourgos - Photography';
	}, []);

	/** RENDER **/
	return (
		<div className={styles.PhotographyPage}>
			<div className={styles.Header}>
				<Image src="/images/ornament_bird.png" alt="Photography" width={72} height={72}
				       style={{marginRight: '8px', marginBottom: '12px'}}
				/>
				Photography
			</div>
			<div className={styles.Line}></div>
			<div className={`${styles.PhotographsContainer} ${styles.RandomRotate}`}>
				{photographs}
			</div>
			<PhotoViewer photo={targetPhoto} onClose={handleCloseModal} open={showPhoto}/>
		</div>
	);
}