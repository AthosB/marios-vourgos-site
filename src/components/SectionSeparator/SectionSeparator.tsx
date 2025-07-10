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
          style={{
            position: 'absolute',
            top: '-10px',
            left: position === 'left' ? '0' : position === 'right' ? 'auto' : '50%',
            right: position === 'right' ? '0' : 'auto',
            transform: position === 'center' ? 'translateX(-50%)' : 'none',
          }}
        >
          {ornament}
        </div>
      )}
    </div>
  );
}