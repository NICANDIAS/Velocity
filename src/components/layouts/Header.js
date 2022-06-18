import React, { useState } from "react";
import { FaHome, FaServer, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [showLinks, setShowLinks] = useState("True");
  const { branding } = props;

  return showLinks ? (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/index" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Index" className="nav-link">
                <FaHome /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                <FaQuestion /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portal"
                className="nav-link"
                onClick={() => setShowLinks()}
              >
                <FaServer /> Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/index" className="navbar-brand">
          {branding}
        </a>
      </div>
    </nav>
  );
};

export default Header;
