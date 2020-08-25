import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import PageNotFound from "../components/404NotFound/PageNotFound";

const PrivateRoute = ({ component: Component, path, rol, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect, userdb } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      console.log(rol);
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path },
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path, userdb, rol]);

  function verificarRol(nombreRol) {
    if (nombreRol.nombreRol === "Administrador") {
      return true;
    }
    return nombreRol.nombreRol === rol;
  }

  function verificarUser() {
    if (rol === "") {
      return true;
    } else {
      userdb.roles.some(verificarRol);
    }
  }

  const render = (props) =>
    isAuthenticated === true && verificarUser() ? (
      <Component {...props} />
    ) : (
      <PageNotFound />
    );

  return <Route path={path} render={render} {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default withRouter(PrivateRoute);
