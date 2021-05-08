import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <NavLink to="/profile" activeClassName={style.active}>
          <li>Profile</li>
        </NavLink>
        <NavLink to="/messages" activeClassName={style.active}>
          <li>Messages</li>
        </NavLink>
        <NavLink to="/news" activeClassName={style.active}>
          <li>News</li>
        </NavLink>
        <NavLink to="/music" activeClassName={style.active}>
          <li>Music</li>
        </NavLink>
        <NavLink to="/settings" activeClassName={style.active}>
          <li>Settings</li>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
