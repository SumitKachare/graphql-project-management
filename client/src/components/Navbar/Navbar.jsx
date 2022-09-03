import React from "react";
import { NavLink } from "react-router-dom";
import GraphQLLogo from "../../assets/logo/logo.png";
import Profile from "../Profile/Profile";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img className="navbar--logo" src={GraphQLLogo} alt="graph-ql logo" />
        <input className="navbar__item navbar--search" placeholder="Search" />
      </div>
      <div className="navbar__right">
        <div className="navbar__item">
          <NavLink to="clients">Clients</NavLink>
        </div>
        <div  className="navbar__item">
          <NavLink to="stats">Stats</NavLink>
        </div>
        <div >
          <Profile/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
