import React from "react";
import style from "./Navbar.module.css";
const Nav = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <a>
          <li>Profile</li>
        </a>
        <a>
          <li>Messages</li>
        </a>
        <a>
          <li>News</li>
        </a>
        <a>
          <li>Music</li>
        </a>
        <a>
          <li>Settings</li>
        </a>
      </ul>
    </nav>
  );
};
export default Nav;
