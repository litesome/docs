import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navbar">
        <ul className="list-block">
          <li>
            <Link to="/docs">Get started</Link>
          </li>
          <li>
            <Link to="/docs/layout">Layout</Link>
            <ul className="list-block nested-list">
              <li>
                <Link to="/docs/layouts/grids">Grid</Link>
              </li>
              <li>
                <Link to="/docs/layouts/cards">Cards</Link>
              </li>
              <li>
                <Link to="/docs/layouts/table">Table</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/docs/components">Components</Link>
            <ul className="list-block nested-list">
              <li>
                <Link to="/docs/components/heading">Forms</Link>
              </li>
              <li>
                <Link to="/docs/components/buttons">Buttons</Link>
              </li>
              <li>
                <Link to="/docs/components/lists">Lists</Link>
              </li>
              <li>
                <Link to="/docs/components/alerts">Alerts</Link>
              </li>
              <li>
                <Link to="/docs/components/navbar">Navbar</Link>
              </li>
              <li>
                <Link to="/docs/components/images">Images</Link>
              </li>
              <li>
                <Link to="/docs/components/heading">Headings</Link>
              </li>
              <li>
                <Link to="/docs/components/spinners">Spinners</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/docs/helpers">Helpers</Link>
            <ul className="list-block nested-list">
              <li>
                <Link to="/docs/helpers/">Containers</Link>
              </li>
              <li>
                <Link to="/docs/helpers/text">Text</Link>
              </li>
              <li>
                <Link to="/docs/helpers/align">Alignment</Link>
              </li>
              <li>
                <Link to="/docs/helpers/positions">Positions</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
