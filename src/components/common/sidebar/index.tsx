import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink exact to="/docs/get-started">
              <i className="icon i-001-shuttle" /> Get started
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/docs/grids">
              <i className="icon i-grid" /> Grid
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/docs/components">
              <i className="icon i-components" /> Components
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
                  Navbar
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
              <i className="icon i-utilities" /> Utility classes
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/docs/colors">
              <i className="icon i-color" /> Colors
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/docs/icons">
              <i className="icon i-icons" /> Icons
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
