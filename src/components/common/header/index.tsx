import { NavLink } from "react-router-dom";
import Logo from './../logo'
// import './Header.css'

const Header = () => {
  return (
    <>
    <header>
      <Logo />
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
  )
};

export default Header;
