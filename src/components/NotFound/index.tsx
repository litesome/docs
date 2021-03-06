import React from "react";
import { Link } from "react-router-dom";

import NotFoundImage from "./../../assets/images/404.svg";
import "./NotFound.css";

const  NotFound = () => {
  return (
    <section className="home-wrapper center-vertical">
      <div className="container-sm position-relative">
        <div className="row">
          <div className="l-sm-12 l-md-12 l-lg-12 center-align">
            <div className="image image-404 center">
              <img className="" src={NotFoundImage} alt="Litesome UI" />
            </div>
            <h1>Page not found!</h1>
            <div className="my-lg text-md">
              Sorry, we can't find what you are looking for.
            </div>
            <div>
              <Link className="button dark" to="/">Back home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NotFound;
