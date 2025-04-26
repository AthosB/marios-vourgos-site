import fs from 'fs';
import path from 'path';

import {Grid} from '@mui/system';
import PaintingsMasonry from '@/components/PaintingsMasonry/PaintingsMasonry';
import SouthIcon from '@mui/icons-material/South';

export default function Home() {
	const imagesDir = path.join(process.cwd(), 'public/images/paintings');
	const allImages = fs.readdirSync(imagesDir).filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
	const shuffledImages = allImages.sort(() => 0.5 - Math.random()).slice(0, 5);

	return (
		<div className={'HomePage'}>
			<Grid container spacing={2}>
				<Grid size={'grow'}>
					<div>
						<div className={'LargeTitle'}>Title</div>
						<div className={'LageSubtitle'}>Subtitle Here</div>
					</div>
				</Grid>
				<Grid size={'grow'}>
					<div className={'MasonryContainer'}>
						<PaintingsMasonry images={shuffledImages}/>
					</div>
				</Grid>
			</Grid>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					marginTop: '4rem'
				}}>
				<div className={'discover-more-cta'}>
					<div className={'action-button-icon'}>
						<SouthIcon fontSize={'medium'}/>
					</div>
					<div>
						<div>Discover</div>
						<div>artwork</div>
					</div>
				</div>
			</div>
			<div>
				<div className={'home-gallery'}>
					<div className={'home-gallery__header'}>
						<div>Gallery</div>
						<div className={'home-gallery__header-navigation'}>
							<img
								src={'/images/arrow_back.png'}
								alt={'Arrow Back'}
								className={'arrow-back'}
								style={{height: '1rem'}}
							/>
							<img
								src={'/images/arrow_next.png'}
								alt={'Arrow Forward'}
								className={'arrow-forward'}
								style={{height: '1rem'}}
							/>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}