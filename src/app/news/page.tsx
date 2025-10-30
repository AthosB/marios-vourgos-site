'use client';

import styles from './newsPage.module.scss';
import NewsFashion from "@/components/News/NewsFashion";

export default function NewsPage() {
  /** RENDER */
  return (
    <div className={styles.NewsPage}>
      <div className={'section-title'} style={{width: '100%'}}>Fashion</div>
      <NewsFashion />
    </div>
  );
}