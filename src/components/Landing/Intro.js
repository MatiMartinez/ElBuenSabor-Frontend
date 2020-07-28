import React from "react";

import "./Intro.css";
import { useAuth0 } from "../../react-auth0-spa";

export default function Intro() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="landing-intro d-flex align-items-center">
      <div className="intro-content-text d-flex flex-column justify-content-around">
        <h6>Menu</h6>
        <h1>Las mejores hamburguesas</h1>
        <button
          className="btn btn-comenzar"
          onClick={() => loginWithRedirect({})}
        >
          Comenzar
        </button>
      </div>
      <div className="intro-content-img">
        <img
          src="https://images.pexels.com/photos/4669246/pexels-photo-4669246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="img-intro"
          className="img-intro"
        />
      </div>
    </div>
  );
}
