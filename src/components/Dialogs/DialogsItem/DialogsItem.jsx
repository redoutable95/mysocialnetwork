import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogsItem.module.css";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <NavLink to={path} activeClassName="active">
      <div className={style.dialog}>{props.userName}</div>
    </NavLink>
  );
};

export default DialogItem;
