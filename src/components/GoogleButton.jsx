import styles from '../styles/GoogleButton.module.css';
import googleIcon from '../image/google-icon.svg';

export const GoogleButton = ({ onClick }) => {
  return (
    <button className={styles.googleButton} onClick={onClick}>
      <img
        src={googleIcon}
        alt="Google Logo"
        width={18}
        height={18}
        className={styles.googleIcon}
      />
      Google
    </button>
  );
};
