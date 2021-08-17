import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink exact to="/docs/get-started">
              Get started
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/docs/grids">
              Grid
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/docs/components">
              Components
            </NavLink>
            <ul className="nested-list">
              <li>
                <NavLink exact to="/docs/components/box">
                  Box
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/forms">
                  Forms
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/buttons">
                  Buttons
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/lists">
                  Lists
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/alerts">
                  Alerts
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/navbar">
                  Navbar &amp; Sidebar{" "}
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/table">
                  Table
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/images">
                  Images
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/typography">
                  Typography
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/docs/components/spinners">
                  Spinners
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink exact to="/docs/utilities">
              Utility classes
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/docs/colors">
              Colors
            </NavLink>
          </li>
          <li className="separator" />
          <li>
            <NavLink exact to="/icons">
              Icons
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
