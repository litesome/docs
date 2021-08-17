import { NavLink } from "react-router-dom";
import logo from "./../../../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header aria-label="navigation">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Litesome CSS Framework" />
          </NavLink>
        </div>
        <nav aria-label="navigation" className="navbar">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/docs/get-started">Docs</NavLink>
          <NavLink
            to={{ pathname: "https://github.com/litesome" }}
            target="_blank"
          >
            Github
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
