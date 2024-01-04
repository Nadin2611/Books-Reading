import { Link } from 'react-router-dom';
import styles from '../styles/AuthHeader.module.css';

const AuthHeader = () => {
  return (
    <div className={styles['auth-header']}>
      <Link to="/" className={styles.logo}>
        BR
      </Link>
    </div>
  );
};

export default AuthHeader;
