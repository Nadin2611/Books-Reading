import { Link } from 'react-router-dom';
import useAuth from '../services/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>

      {isLoggedIn && <Link to="/library">library</Link>}
    </nav>
  );
};
