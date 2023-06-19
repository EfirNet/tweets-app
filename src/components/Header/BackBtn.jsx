import { ImUndo2 } from 'react-icons/im';
import styles from './BackBtn.module.css';

const BackBtn = () => {
  return (
    <>
      <div className={styles.backButton}>
        <ImUndo2 className={styles.icon} />
        Back
      </div>
    </>
  );
};

export default BackBtn;
