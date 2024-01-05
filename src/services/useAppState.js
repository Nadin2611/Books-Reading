import { useState } from 'react';

const useAppState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);

  return {
    isLoggedIn,
    isLoggingIn,
    error,
    setIsLoggedIn,
    setIsLoggingIn,
    setError,
  };
};

export default useAppState;
