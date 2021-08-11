import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <ul className="list-block">
          <li>
            <NavLink to="/docs">Get started</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-navlink" to="/docs/grids">
              Grid
            </NavLink>
          </li>
          <li>
            <NavLink to="/docs/components">Components</NavLink>
            <ul className="list-block nested-list">
              <li>
                <NavLink to="/docs/components/box">Box</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/forms">Forms</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/buttons">Buttons</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/lists">Lists</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/alerts">Alerts</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/navbar">Navbar</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/table">Table</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/images">
                  Images &amp; Avatars
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/typography">Typography</NavLink>
              </li>
              <li>
                <NavLink to="/docs/components/spinners">Spinners</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/docs/utilities">Utility classes</NavLink>
          </li>
          <li>
            <NavLink to="/docs/colors">Colors</NavLink>
          </li>
          <li>
            <NavLink to="/icons">Icons</NavLink>
            {/* <ul className="list-block nested-list">
              <li>
                <NavLink to="/docs/helpers/">Containers</NavLink>
              </li>
              <li>
                <NavLink to="/docs/helpers/text">Text</NavLink>
              </li>
              <li>
                <NavLink to="/docs/helpers/align">Alignment</NavLink>
              </li>
              <li>
                <NavLink to="/docs/helpers/positions">Positions</NavLink>
              </li>
            </ul> */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
