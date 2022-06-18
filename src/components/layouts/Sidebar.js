import React from "react";
import "./SidebarStyle.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      clasNames="wrapper"
      style={{ display: "flex", width: "100%", alignItems: "stretch" }}
    >
      <nav
        id="sidebar"
        style={{ minWidth: "250px", maxWidth: "250px", minHeight: "100vh" }}
      >
        <div className="sidebar-header">
          <h3>Velocity Promotions</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <li className="active">
            <Link
              to="/index"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
              style={{ position: "relative" }}
            >
              Home
            </Link>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="/">Home 1</a>
              </li>
              <li>
                <a href="/">Home 2</a>
              </li>
              <li>
                <a href="/">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              Pages
            </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="/">Page 1</a>
              </li>
              <li>
                <a href="/">Page 2</a>
              </li>
              <li>
                <a href="/">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
