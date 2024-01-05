import Container from 'components/Container';
import { Header } from 'components/Header';
import { Loader } from 'components/Loader';
import Visit from 'components/Visit';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Header></Header>
      <Visit></Visit>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default HomePage;
