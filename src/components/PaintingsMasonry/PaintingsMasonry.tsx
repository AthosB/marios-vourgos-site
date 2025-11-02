import Masonry from '@mui/lab/Masonry';

export default function PaintingsMasonry({ images }: { images: string[] }) {
  return (
    <div style={{display: 'inline-block', width: '50%', marginTop: '2rem'}}>
      <Masonry columns={3} spacing={2} component="div">
        {images?.map((image, index) => (
          <div key={index}>
            <img
              src={`/images/paintings/${image}`}
              alt={`Painting ${index + 1}`}
              style={{
                width: 'min-content',
                height: 'max-content',
                display: 'block',
                objectFit: 'cover',
                borderRadius: '6px',
              }}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}