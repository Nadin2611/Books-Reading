import useAppState from './useAppState.js';
import { post, get } from './api.js';

const useAuth = () => {
  const {
    isLoggedIn,
    isLoggingIn,
    error,
    setIsLoggedIn,
    setIsLoggingIn,
    setError,
  } = useAppState();

  const register = async registrationData => {
    try {
      setIsLoggingIn(true);
      const data = await post('auth/register', registrationData);
      setIsLoggedIn(true);
      setIsLoggingIn(false);
      setError(null);
      console.log('Registered:', data);
    } catch (error) {
      setIsLoggedIn(false);
      setIsLoggingIn(false);
      setError('Registration failed');
    }
  };

  const login = async credentials => {
    try {
      setIsLoggingIn(true);
      const data = await post('auth/login', credentials);
      setIsLoggedIn(true);
      setIsLoggingIn(false);
      setError(null);
      console.log('Logged in:', data);
      console.log(isLoggedIn);
    } catch (error) {
      setIsLoggedIn(false);
      setIsLoggingIn(false);
      setError('Incorrect email or password');
    }
  };

  const logout = async () => {
    try {
      await post('auth/logout');
      setIsLoggedIn(false);
      setError(null);
      console.log('Logged out');
    } catch (error) {
      setError('Error during logout');
    }
  };

  const refreshTokens = async refreshToken => {
    try {
      const data = await post('auth/refresh', { refreshToken });
      console.log('Tokens refreshed:', data);
    } catch (error) {
      setError('Refresh tokens:', error);
    }
  };

  const googleAuth = async () => {
    try {
      const data = await get('auth/google', {
        headers: {
          accept: '*/*',
        },
      });
      console.log('Google authentication:', data);
    } catch (error) {
      setError('Google authentication error:', error);
    }
  };

  return {
    isLoggedIn,
    isLoggingIn,
    error,
    register,
    login,
    logout,
    refreshTokens,
    googleAuth,
  };
};

export default useAuth;
