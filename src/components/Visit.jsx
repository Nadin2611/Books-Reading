import styles from '../styles/Visit.module.css';

const Visit = () => {
  return (
    <div className={styles.visitContainer}>
      <h1 className={styles.heading}>Books Reading</h1>
      <div className={styles.listWrapper}>
        <div>
          <h2 className={styles.subHeading}>Will help you to</h2>
          <div className={styles.listContainer}>
            <ul>
              <li>Create your goal faster and proceed to read</li>
              <li>Divide process proportionally for each day</li>
              <li>Track your success</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className={styles.subHeading}>You may also</h2>
          <div className={styles.listContainer}>
            <ul>
              <li>Pose your own independent point of view</li>
              <li>
                Improve your professional skills according to new knowledge
              </li>
              <li>Become an interesting interlocutor</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
