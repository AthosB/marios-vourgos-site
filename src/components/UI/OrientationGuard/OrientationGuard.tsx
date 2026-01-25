import styles from './OrientationGuard.module.scss';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';

export default function OrientationGuard() {
  return (
    <div className={styles.OrientationGuard}>
      <div className={styles.Icon}>
        <ScreenRotationIcon fontSize={'large'} />
      </div>
      <div className={styles.Text}>
        <p>Site only available in portrait mode.</p>
        <p>Rotate your phone back to portrait orientation to view the website.</p>
      </div>
    </div>
  );
}