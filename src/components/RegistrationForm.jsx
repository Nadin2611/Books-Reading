import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';
import { Link } from 'react-router-dom';
import useAuth from '../services/useAuth';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, isLoggingIn, error } = useAuth();

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      await register({ name, email, password });
    } catch (error) {}
  };

  const isFormValid = name && email && password && confirmPassword;

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.labelWrapper}>
          <div className={styles.labelContainer}>
            <label className={styles.label}>
              <span>Name</span>
              <span className={styles.required}> *</span>
              <input
                className={styles.input}
                type="name"
                name="name"
                value={name}
                placeholder="..."
                autoComplete="false"
                onChange={event => setName(event.target.value)}
                required
              />
            </label>
          </div>
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
                placeholder="..."
                autoComplete="false"
                onChange={event => setPassword(event.target.value)}
                required
              />
            </label>
          </div>
          <div className={styles.labelContainer}>
            <label className={styles.label}>
              <span>Confirm password</span>
              <span className={styles.required}> *</span>
              <input
                className={styles.input}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="..."
                autoComplete="false"
                onChange={event => setConfirmPassword(event.target.value)}
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
          Register
        </button>

        {error && <p>{error}</p>}
      </form>
      <div className={styles.linkContainer}>
        <span className={styles.linkText}>Already have an account? </span>
        <Link to="/login" className={styles.linkRegister}>
          Log in
        </Link>
      </div>
    </div>
  );
};
