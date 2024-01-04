import AuthHeader from './AuthHeader';
import UserMenu from './UserMenu';

export const Header = () => {
  return (
    <header>
      <UserMenu />
      <AuthHeader />
    </header>
  );
};
