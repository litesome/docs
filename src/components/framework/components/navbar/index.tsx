import { NavLink } from "react-router-dom";
import DocLayout from "../../../../layouts/Docs/index";
import { CodeHighlighter } from "../../../common/highlighter";

const MDNavbar = `<nav aria-label="navigation" class="navbar">
  <a exact to="/">Home</a>
  <a to="/about">About Us</a>
  <a to="/contact">Contact</a>
</nav>`;
const MDHeader = `<nav aria-label="navigation" class="navbar">
  <a exact to="/">Home</a>
  <a to="/about">About Us</a>
  <a to="/contact">Contact</a>
</nav>`;

const Navbar = () => {
  return (
    <>
      <DocLayout>
        <h1>Navbar</h1>
        <div className="lead">Easy way of managing navigation menu</div>
        <div className="code-example">
          <nav aria-label="navigation" className="navbar">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
        <CodeHighlighter code={MDNavbar} />
        <h2>Navbar in header</h2>
        <div className="code-example">
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
        </div>
        <CodeHighlighter code={MDHeader} />
      </DocLayout>
    </>
  );
};

export default Navbar;
