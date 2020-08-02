import React from "react";

import "./HeroCatalog.css";

export default function HeroCatalog(props) {
  return (
    <div>
      <div className="hero-catalog d-flex flex-column align-items-center justify-content-center">
        {/** Hero catalog */}
        <div className="w-50 mb-5 p-4 content-title-catalog">
          <h1 className="title-catalog">¡Tu comida favorita!</h1>
        </div>
        {/** Buscador */}
        {props.children}
      </div>
    </div>
  );
}
