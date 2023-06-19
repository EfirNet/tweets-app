import logo from '../../images/logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" width={76} height={22} />
    </div>
  );
};

export default Logo;
