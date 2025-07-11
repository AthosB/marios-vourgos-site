import {ReactNode} from "react";
import styles from "./SectionSeparator.module.scss";

interface SectionSeparator {
	ornament?: ReactNode;
	position?: 'left' | 'right' | 'center';
}

export default function SectionSeparator({
	                                         ornament = null,
	                                         position = 'center',
}: SectionSeparator) {
  return (
    <div className={styles.SectionSeparator}>
      {ornament && (
        <div
          className={styles.Ornament}
          style={{
            position: 'absolute',
            // top: '-10px',
            left: position === 'left' ? '5rem' : position === 'right' ? 'auto' : '50%',
            right: position === 'right' ? '5rem' : 'auto',
            transform: position === 'center' ? 'translateX(-50%)' : position === 'right' ? 'none' : 'translateY(-35%)',
          }}
        >
          {ornament}
        </div>
      )}
    </div>
  );
}