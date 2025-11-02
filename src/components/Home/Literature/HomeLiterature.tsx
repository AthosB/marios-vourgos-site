'use client'

import styles from './HomeLiterature.module.scss';

export default function HomeLiterature() {
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
            <p>Lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}