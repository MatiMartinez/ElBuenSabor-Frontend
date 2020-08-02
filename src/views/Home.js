import React, { Fragment } from "react";

import Hero from "../components/Landing/Hero";
import Intro from "../components/Landing/Intro";
import Content from "../components/Landing/Content";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
  const { isAuthenticated, userdb } = useAuth0();

  if (isAuthenticated === true) {
    console.log(userdb);

    if (userdb.roles.length === 0) {
      window.location.replace("/catalog");
    } else {
      window.location.replace("/select-home");
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
