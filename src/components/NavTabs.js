import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (

    <ul className="nav navbar-dark fixed-top bg-dark d-flex justify-content-center text-white">
      <li className="nav-item">
        <Link className="nav-link text-white" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/About">
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/Portfolio">
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/Resume">
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/Contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
