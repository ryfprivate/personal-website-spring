import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="wrapper__navbar">
      <NavLink exact to="/" className="" activeClassName="">
        Home
      </NavLink>
      <NavLink exact to="/projects" className="" activeClassName="">
        Projects
      </NavLink>
    </div>
  );
};

export default Navbar;
