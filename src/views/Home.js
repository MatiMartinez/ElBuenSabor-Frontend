import React, { Fragment } from 'react';

import Catalog from '../components/Clientes/Catalog';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { useAuth0 } from '../react-auth0-spa';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      {!isAuthenticated && (
        <Fragment>
          <Hero />
          <Content />
        </Fragment>
      )}
      {isAuthenticated && <Catalog />}
    </Fragment>
  );
};

export default Home;
