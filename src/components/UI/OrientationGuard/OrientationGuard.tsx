import styles from './OrientationGuard.module.scss';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';

export default function OrientationGuard() {
  return (
    <div className={styles.OrientationGuard}>
      <div className={styles.Icon}>
        <ScreenRotationIcon fontSize={'large'} />
      </div>
      <div className={styles.Text}>
        <h2>Site only available in <b>portrait</b> mode</h2>
        <p>Please rotate your device back to portrait orientation to continue</p>
        <p><em>For a more immersive experience, the work unfolds best on a computer or larger screen.</em></p>
      </div>
    </div>
  );
}