import Container from './Container';
import styles from '../styles/Quote.module.css';

const Quote = () => {
  return (
    <Container>
      <div className={styles.quoteContainer}>
        <h2 className={styles.quoteTitle}>
          Books are the ships of thoughts, wandering through the waves of time.
        </h2>
        <p className={styles.quoteAuthor}>Francis Bacon</p>
      </div>
    </Container>
  );
};

export default Quote;
