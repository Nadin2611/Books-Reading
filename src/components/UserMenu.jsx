import { Link } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Library</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default UserMenu;
