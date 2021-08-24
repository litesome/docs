import { Link } from "react-router-dom";
import "./Logo.css";
import logo from "./../../../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Litesome CSS Framework" />
      </Link>
    </div>
  );
};

export default Logo;
