import { useState } from 'react';
import CardList from '../components/Cards/CardList';
import styles from './TweetsPage.module.css';

const TweetsPage = () => {
  const [filter, setFilter] = useState('showAll');

  const localStorageData = localStorage.getItem('tweets');
  const data = localStorageData ? JSON.parse(localStorageData) : [];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCards = data.filter((item) => {
    if (filter === 'showAll') return true;
    if (filter === 'follow') return !item.followings;
    if (filter === 'followings') return item.followings;
    return false;
  });

  return (
    <div className={styles.container}>
      <CardList
        filter={filter}
        onFilterChange={handleFilterChange}
        filteredCards={filteredCards}
      />
    </div>
  );
};

export default TweetsPage;
