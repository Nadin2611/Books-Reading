import { useState, useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import useAuth from '../services/useAuth';
import { Loader } from './Loader';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LibraryPage = lazy(() => import('../pages/LibraryPage'));

export const App = () => {
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { refreshTokens } = useAuth();
  console.log(isLoggedIn);

  useEffect(() => {
    const refreshUser = async () => {
      try {
        const refreshToken = await refreshTokens();
        if (refreshToken) {
          await refreshTokens(refreshToken);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error refreshing user:', error);
      } finally {
        setIsRefreshing(false);
      }
    };
    refreshUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/library" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/library" component={<LoginPage />} />
          }
        />
        <Route
          path="/library"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<LibraryPage />}
            ></PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
