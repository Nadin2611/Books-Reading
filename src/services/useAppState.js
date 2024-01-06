import { useState } from 'react';

const useAppState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);

  return {
    isLoggedIn,
    isLoggingIn,
    isRefreshing,
    error,
    setIsLoggedIn,
    setIsLoggingIn,
    setIsRefreshing,
    setError,
  };
};

export default useAppState;
