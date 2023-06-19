import { NavLink } from 'react-router-dom';
import { ImHome, ImTwitter } from 'react-icons/im';
import styles from './Menu.module.css';

const Menu = () => {
  const styleActive = ({ isActive }) =>
    isActive ? { backgroundColor: 'lightyellow', textDecoration: 'none' } : {};

  return (
    <nav className={styles.menu}>
      <NavLink className={styles.item} style={styleActive} to="." end>
        <ImHome className={styles.icon} /> Home
      </NavLink>
      <NavLink className={styles.item} style={styleActive} to="tweets">
        <ImTwitter className={styles.icon} /> Tweets
      </NavLink>
    </nav>
  );
};

export default Menu;
