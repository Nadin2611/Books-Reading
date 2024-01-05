import Container from 'components/Container';
import LoginForm from 'components/LoginForm';
import useAuth from '../services/useAuth';
import Quote from 'components/Quote';

export default function Login() {
  const { isLoggingIn, error, login } = useAuth();

  const handleLogin = credentials => {
    login(credentials);
  };

  return (
    <Container>
      <title>Log In</title>
      <LoginForm
        onLogin={handleLogin}
        isLoggingIn={isLoggingIn}
        error={error}
      ></LoginForm>
      <Quote />
    </Container>
  );
}
