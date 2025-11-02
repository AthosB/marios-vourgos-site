'use client'

import {Button} from "@mui/material";
import styles from './HomeLiterature.module.scss';
import {pushAnchor} from "@/utils/helpers";

export default function HomeLiterature() {
  /** CONSTS **/
  const isMobile = window.innerWidth <= 768;

  const viewPhotoHandler = (imageData: {
    src: string;
    alt?: string;
    title?: string;
    description?: string;

  }) => {
    pushAnchor(`#home-literature-view-${imageData.title}`);

    const previewData = {
      src: imageData.src,
      alt: imageData.title,
      title: imageData.title,
      description: imageData.description ? imageData.description : '',
    }

    localStorage.setItem('previewData', JSON.stringify(previewData));
    window.location.href = '/view';
    // setOpenPhotoViewer(true);
  }

  /** RENDER **/
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className={styles.HomeLiterature}>
        <div className={styles.LiteratureEntry}>
          <div className={styles.EntryContent}>
            <div className={styles.EntryPhoto}>
              <img
                src="/images/literature/tango-1.jpg"
                alt="Tango 29"
                height={430}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <div className={styles.EntryDescription}>
              <p>
                The medieval castle was transformed into a modern stage, with live theatrical characters and visual
                installations, where attendees watched the verses from Marios Vourgos’ poetry collection “Tango 29” come
                to life through a group of acclaimed artists, under the direction of theatre director Elena Sokratous.
              </p>
              <div className={styles.Action}>
                <a
                  href={'https://www.tango29.eu/'}
                  target="_blank"
                  rel={'noreferrer'}
                  style={{margin: '0 auto'}}
                  title="Tango 29 (opens in a new tab)"
                >
                  <Button
                    variant="contained"
                    color="warning"
                  >
                    More
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.EntryMore}>
            <img
              src={'/images/literature/tango-kolossi-01.jpg'}
              alt="Tango 29"
              height={isMobile ? undefined : 196}
              width={isMobile ? 128 : undefined}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => {
                viewPhotoHandler({
                  src: '/images/literature/tango-kolossi-01.jpg',
                  alt: 'Tango 29',
                  title: 'Tango 29',
                  description: 'Tango 29 - "Μνήμης Ταλάντωση"',
                })
              }}
            />
            <img
              src={'/images/literature/tango-kolossi-02.jpg'}
              alt="Tango 29"
              height={isMobile ? undefined : 196}
              width={isMobile ? 128 : undefined}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => {
                viewPhotoHandler({
                  src: '/images/literature/tango-kolossi-02.jpg',
                  alt: 'Tango 29',
                  title: 'Tango 29',
                  description: 'Tango 29 - "Μνήμης Ταλάντωση"',
                })
              }}
            />
            <img
              src={'/images/literature/tango-kolossi-03.jpg'}
              alt="Tango 29"
              height={isMobile ? undefined : 196}
              width={isMobile ? 128 : undefined}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => {
                viewPhotoHandler({
                  src: '/images/literature/tango-kolossi-03.jpg',
                  alt: 'Tango 29',
                  title: 'Tango 29',
                  description: 'Tango 29 - "Μνήμης Ταλάντωση"',
                })
              }}
            />
            <img
              src={'/images/literature/tango-kolossi-04.jpg'}
              alt="Tango 29"
              height={isMobile ? undefined : 196}
              width={isMobile ? 128 : undefined}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => {
                viewPhotoHandler({
                  src: '/images/literature/tango-kolossi-04.jpg',
                  alt: 'Tango 29',
                  title: 'Tango 29',
                  description: 'Tango 29 - "Μνήμης Ταλάντωση"',
                })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}