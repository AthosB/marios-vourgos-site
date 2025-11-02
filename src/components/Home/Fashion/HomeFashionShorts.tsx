'use client'

import styles from './HomeFashionShorts.module.scss';

export default function HomeFashionShorts() {
  return (
    <div className={styles.FashionGifWrapper}>
      <img
        src="/images/fashion/clips/short_001_optimized.gif"
        alt="Fashion clip"
        height={256}
        style={{display: 'block', maxWidth: '100%'}}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <img
        src="/images/fashion/clips/short_002_optimized.gif"
        alt="Fashion clip"
        height={256}
        style={{display: 'block', maxWidth: '100%'}}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}