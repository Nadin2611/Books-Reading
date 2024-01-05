import styles from '../styles/GoogleButton.module.css';

export const GoogleButton = () => {
  return (
    <button
      className={styles.googleButton}
      onClick={() => alert('Google button clicked')}
    >
      <img
        src="../image/google-icon.svg"
        alt="Google Logo"
        width={18}
        height={18}
        className={styles.googleIcon}
      />
      Google
    </button>
  );
};
