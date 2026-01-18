'use client'

import styles from './contactPage.module.scss';
import './contact-page.scss';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

export default function ContactPage() {
  /** PRES **/
  const isMobile = window.innerWidth <= 950;

  /** RENDER **/
  return (
    <div className={styles.ContactPage}>
      <div className={styles.Title}>Contact</div>
      <p className={styles.ContactEmail}>
        <MailOutlineRoundedIcon
          fontSize={'medium'}
          style={{marginBottom: isMobile ? '-3px' : '-6px'}}
        />
        You can contact us via email at <a href="mailto:mmv@cytanet.com.cy">mmv@cytanet.com.cy</a>
      </p>
    </div>
  );
}