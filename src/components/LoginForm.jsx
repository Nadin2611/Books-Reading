import { useState } from 'react';
import styles from '../styles/LoginForm.module.css';
import { Loader } from './Loader';
import { Link } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';

const LoginForm = ({ onLogin, isLoggingIn, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    onLogin({ email, password });
    form.reset();
  };
  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <GoogleButton></GoogleButton>
        <div className={styles.labelWrapper}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>
              <span>Email</span>
              <span className={styles.required}> *</span>
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
              <span>Password</span>
              <span className={styles.required}> *</span>
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
        </div>

        <button
          className={styles.loginButton}
          type="submit"
          disabled={!isFormValid || isLoggingIn}
        >
          Log In
        </button>
        {isLoggingIn && Loader}
        {error && <p>{error}</p>}
      </form>
      <Link to="/register" className={styles.link}>
        Register
      </Link>
    </div>
  );
};

export default LoginForm;
