// import PropTypes from 'prop-types';
import avatar from '../images/boy.png';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <svg className={styles.svg}>
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          Tweets App
        </text>
      </svg>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <img
            className={styles.avatar}
            src={avatar}
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
