import { Link } from 'react-router-dom';
import '../styles/AuthHeader.css';

const AuthHeader = () => {
  return (
    <div className="auth-header">
      <Link to="/">
        <div className="logo">BR</div>
      </Link>
    </div>
  );
};

export default AuthHeader;
