import { Link } from "react-router-dom";
import litesomeMind from "./../../assets/images/sketch-2.svg";

import Header from "../common/header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home-wrapper center-vertical">
        <div className="container position-relative">
          <div className="row">
            <div className="l-sm-12 l-md-6 l-lg-5">
              <h1>Fast and easy-to-use CSS framework, built for you.</h1>
              <div className="my-lg text-md">
                Sophistication is the art of being simple
              </div>
              <div className="my-lg">
                <Link className="button primary" to="/docs">
                  Get started
                </Link>
              </div>
            </div>
            <div className="hide-sm l-md-6 l-lg-5">
              <div className="position-relative">
                <img
                  className="litesome-sketch"
                  src={litesomeMind}
                  alt="Litesome UI"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
