import styles from './CardFilter.module.css';

const CardFilter = ({ filter, onFilterChange }) => {
  return (
    <form className={styles.position}>
      <select
        style={{
          backgroundColor: '#4C2B9A',
        }}
        value={filter}
        onChange={onFilterChange}
      >
        <option value="showAll">Show all</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
    </form>
  );
};

export default CardFilter;
