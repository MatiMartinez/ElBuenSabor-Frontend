import React from "react";

import "./Content.css";

export default function Content() {
  return (
    <div className="landing-content d-flex align-items-center">
      <div className="content-content-img">
        <img
          src="https://images.pexels.com/photos/4669246/pexels-photo-4669246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="img-intro"
          className="img-content"
        />
      </div>
      <div className="content-content-text d-flex flex-column justify-content-around">
        <h6>Nuestra Web</h6>
        <h1>Delivery & Take Out</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>
    </div>
  );
}
