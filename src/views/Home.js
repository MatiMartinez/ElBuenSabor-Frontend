import React, { Fragment } from "react";

import Catalog from "../components/Clientes/Catalog/Catalog";
import Hero from "../components/Landing/Hero";
import Intro from "../components/Landing/Intro";
import Content from "../components/Landing/Content";
import { useAuth0 } from "../react-auth0-spa";
import SelectHome from "./SelectHome/SelectHome";

const Home = () => {
  const { isAuthenticated, userdb } = useAuth0();

  if (isAuthenticated === true) {
    console.log(userdb);

    if (userdb.roles.length !== 0) {
      return <Catalog />;
    } else {
      return <SelectHome roles={userdb.roles} />;
    }
  } else {
    return (
      <Fragment>
        <Hero />
        <Intro />
        <Content />
      </Fragment>
    );
  }
};

export default Home;
