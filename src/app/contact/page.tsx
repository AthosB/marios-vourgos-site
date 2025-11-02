import styles from './contactPage.module.scss';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

export const generateMetadata = () => ({
  title: "Marios Vourgos - Contact",
});

export default function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <div className={styles.Title}>Contact</div>
      <p>
        We would love to hear from you! If you have any questions, feedback, or
        suggestions, please feel free to reach out.
      </p>
      <p className={styles.ContactEmail}>
        <MailOutlineRoundedIcon fontSize={'medium'} /> You can contact us via email at <a href="mailto:mmv@cytanet.com.cy">mmv@cytanet.com.cy</a>
      </p>
    </div>
  );
}