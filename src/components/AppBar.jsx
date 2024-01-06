import AuthHeader from './AuthHeader';
import UserMenu from './UserMenu';
import useAuth from '../services/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);
  return <header>{isLoggedIn ? <UserMenu /> : <AuthHeader />}</header>;
};
