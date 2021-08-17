import DocLayout from "../../../../layouts/Docs/index";
import CodeHighlighter from "../../../common/highlighter";
import { NavLink } from "react-router-dom";

const MDHelperBox = `<div class='box'>
  <div class='box-body'>
    <h2>Box title</h2>
    <p>
      The page header is a nice little feature to add appropriate spacing around the headings on a page.
      This is particularly helpful on a web page where you may have several post titles and
      need a way to add distinction to each of them.
    </p>
    </div>
    <div>
    <button type="button" class="button primary">
      Primary
    </button>
    <button type="button" class="button bordered-light">
      Light
    </button>
  </div>
</div>`;

const Navbar = () => {
  return (
    <>
      <DocLayout>
        <h1>Navbar</h1>
        <div className="lead">Vertical and horizontal lists</div>
        <header aria-label="navigation">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <nav aria-label="navigation" className="navbar">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>
      </DocLayout>
    </>
  );
};

export default Navbar;
