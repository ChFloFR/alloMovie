import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <h2>Navbar</h2>
        <ul className="nav-links">
          <li>
            <Link to="/">
              <img src="..\public\icon2_101136.png" alt="" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about"></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
