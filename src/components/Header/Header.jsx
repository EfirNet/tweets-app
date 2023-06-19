import { Link, useLocation } from 'react-router-dom';

import Menu from './Menu';
import CardFilter from '../Cards/CardFilter';
import styles from './Header.module.css';
import BackBtn from './BackBtn';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {location.pathname !== '/' ? (
          <div className={styles.menu}>
            <Link to=".">
              <BackBtn />
            </Link>
          </div>
        ) : (
          <div className={styles.menu}>
            <Logo />
          </div>
        )}
        <div className={styles.menu}>
          <Menu />
        </div>
        {location.pathname !== '/' ? (
          <div className={styles.menu}>
            <CardFilter />
          </div>
        ) : (
          <div className={styles.menu}>
            <Logo />
          </div>
        )}
      </div>
      <div className={styles.bottomLine}></div>
    </header>
  );
};

export default Header;
