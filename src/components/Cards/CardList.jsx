import { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../../utils/Loader';
import styles from './CardList.module.css';

const API_URL = 'https://63caa4aa4f53a0042027c558.mockapi.io/tweets';

const CardList = ({ filteredCards }) => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${API_URL}?page=${currentPage}&limit=${cardsPerPage}`
        );
        const fetchedCards = await res.json();
        setCards(prevCards => [...prevCards, ...fetchedCards]);

        if (fetchedCards.length < cardsPerPage) {
          setHasMore(false);
        }
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentPage, cardsPerPage]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setCardsPerPage(6);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <ul className={styles.cardList}>
        {isLoading ? (
          <Loader />
        ) : (
          cards.map(card => <Card key={card.id} {...card} />)
        )}
      </ul>
      <div className={styles.container}>
        {!isLoading && hasMore && (
          <button className={styles.loadMore} onClick={handleLoadMore}>
            Load More
          </button>
        )}

        {!isLoading && !hasMore && (
          <p className={styles.loadMore}>There are no more cards</p>
        )}
      </div>
    </main>
  );
};

export default CardList;
