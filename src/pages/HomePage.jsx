import React from 'react';
import Container from 'components/Container';
import useAuth from '../services/useAuth';
import Visit from 'components/Visit';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return <Container>{!isLoggedIn && <Visit />}</Container>;
}
