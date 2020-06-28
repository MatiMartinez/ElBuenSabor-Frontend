import React, { Fragment } from 'react';

import Catalog from '../components/Clientes/Catalog';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { useAuth0 } from '../react-auth0-spa';
import Admin from './Admin';
import Cocina from '../components/Admin/Cocina/Cocina';
import Caja from './Caja';

const Home = () => {
  const { isAuthenticated, userdb } = useAuth0();

  if (isAuthenticated === true) {
    if (userdb.roles.length === 0) {
      return <Admin />;
      /*} else if (userdb.rol === 'Cocinero') {
      return <Cocina />;
    } else if (userdb.rol === 'Cajero') {
      return <Caja />;
    } else {
      return <Catalog />;
    }*/
    }
  } else {
    return (
      <Fragment>
        <Hero />
        <Content />
      </Fragment>
    );
  }
};

export default Home;
