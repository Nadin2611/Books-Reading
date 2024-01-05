import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';
import { Loader } from './Loader';

const LoginForm = ({ onLogin, isLoggingIn, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    onLogin({ email, password });
    form.reset();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button
          className={styles.googleButton}
          onClick={() => alert('Google button clicked')}
        >
          <img
            src="image/google.svg"
            alt="Google Logo"
            width={18}
            height={18}
            className={styles.googleIcon}
          />
          Google
        </button>
        <div className={styles.labelContainer}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="your@email.com"
              autoComplete="false"
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
              placeholder="Password"
              autoComplete="false"
              onChange={event => setPassword(event.target.value)}
              required
            />
          </label>
        </div>

        <button
          className={styles.loginButton}
          type="submit"
          disabled={isLoggingIn}
        >
          Log In
        </button>
        {isLoggingIn && Loader}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
