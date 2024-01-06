import AuthHeader from './AuthHeader';
import UserMenu from './UserMenu';
import useAuth from '../services/useAuth';
import { Navigation } from './Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthHeader />}
    </header>
  );
};
