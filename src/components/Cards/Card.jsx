import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import defaultImg from '../../images/avatar.png';
import styles from './Card.module.css';

const Card = ({ id, tweets, avatar = defaultImg }) => {
  const [followers, setFollowers] = useState(100500);
  const [followings, setFollowings] = useState(false);

  useEffect(() => {
    const storedTweets = localStorage.getItem('tweets');

    if (storedTweets) {
      const parsedTweets = JSON.parse(storedTweets);
      const tweet = parsedTweets.find((item) => item.id === id);

      if (tweet) {
        setFollowings(tweet.followings);
        setFollowers(tweet.followers);
      }
    }
  }, [id]);

  useEffect(() => {
    const storedTweets = localStorage.getItem('tweets');
    let parsedTweets = storedTweets ? JSON.parse(storedTweets) : [];

    const tweetIndex = parsedTweets.findIndex((item) => item.id === id);
    const tweet = { id, tweets, avatar, followers, followings };

    if (tweetIndex !== -1) {
      parsedTweets[tweetIndex] = tweet;
    } else {
      parsedTweets.push(tweet);
    }

    localStorage.setItem('tweets', JSON.stringify(parsedTweets));
  }, [id, tweets, avatar, followers, followings]);

  const handleFollow = () => {
    setFollowings(!followings);
    setFollowers(followings ? followers - 1 : followers + 1);
  };

  return (
    <li className={styles.container}>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        width={76}
        height={22}
      />
      <div className={styles.bgImg}></div>
      <div className={styles.line}>
        <div className={styles.circle}></div>
        <div className={styles.ellipse}></div>
        <img
          className={styles.avatar}
          src={avatar}
          alt="avatar"
          width={64}
          height={64}
        />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.textCount}>{`${tweets} Tweets`}</p>
        <p className={styles.textCount}>{`${followers.toLocaleString(
          'en-EN'
        )} Followers`}</p>
        <button
          className={`${styles.btn} ${followings ? styles.btnColor : ''}`}
          onClick={handleFollow}
        >
          {followings ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};

export default Card;
