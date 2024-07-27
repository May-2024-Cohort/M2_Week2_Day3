// src/components/Navbar.jsx

import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          {/* <Link to="/">Homepage</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link> */}

          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>

        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  