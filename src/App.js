import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";

// Components
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Landing/Footer";
import Home from "./views/Home";
import Profile from "./components/Profile/Profile";
import Cocina from "./views/Cocina";
import Caja from "./views/Caja";
import Admin from "./views/Admin/Admin";

import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import SelectHome from "./views/SelectHome/SelectHome";
import Catalog from "./components/Clientes/Catalog/Catalog";
import { CartProvider } from "./context/CartContext";
import PageNotFound from "./components/404NotFound/PageNotFound";
import HistorialPedidos from "./components/Clientes/HistorialPedidos/HistorialPedidos";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <div className="w-100">
          <CartProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/catalog" component={Catalog} />
              <PrivateRoute path="/select-home" component={SelectHome} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/pedidos" component={HistorialPedidos} />
              <PrivateRoute path="/cocina" component={Cocina} />
              <PrivateRoute path="/caja" component={Caja} />
              <PrivateRoute path="/admin" component={Admin} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </CartProvider>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
