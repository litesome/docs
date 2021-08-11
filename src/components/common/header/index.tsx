import { Link } from "react-router-dom";
import logo from "./../../../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header aria-label="navigation">
        {/* <div className="container"> */}
        <div className="row">
          <div className="l-sm-12 l-md-3 l-lg-3">
            <div className="logo image">
              <Link to="/">
                <img src={logo} alt="Litesome CSS Framework" />
              </Link>
            </div>
          </div>
          <div className="hide-sm l-md-9 l-lg-9">
            <nav aria-label="navibation" className="navbar right">
              <ul className="list-inline">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/docs">Docs</Link>
                </li>
                <li>
                  <Link
                    to={{ pathname: "https://github.com/litesome" }}
                    target="_blank"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <span className="badge primary">v.1.0.0</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* </div> */}
      </header>
    </>
  );
};

export default Header;
