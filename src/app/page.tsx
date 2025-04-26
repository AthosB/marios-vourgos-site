import fs from 'fs';
import path from 'path';

import { Grid } from '@mui/system';
import PaintingsMasonry from '@/components/PaintingsMasonry/PaintingsMasonry';

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
            <PaintingsMasonry images={shuffledImages} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}