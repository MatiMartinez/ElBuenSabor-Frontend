import React, { useEffect } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';

const PrivateRouteCajero = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path },
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  // Condicion de Cajero
  const cond = true;

  const render = (props) =>
    isAuthenticated === true ? <Component {...props} /> : null;

  if (cond) {
    return <Route path={path} render={render} {...rest} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default withRouter(PrivateRouteCajero);
