import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setEmail();
    setPassword();
    form.reset();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button
          className={styles.googleButton}
          onClick={() => alert('Google button clicked')}
        >
          Log In with Google
        </button>
        <div className={styles.labelContainer}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
          </label>
        </div>

        <div className={styles.labelContainer}>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
            />
          </label>
        </div>

        <button className={styles.loginButton} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
