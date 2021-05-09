import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <NavLink to={path} activeClassName="active">
      <div className={style.dialog}>{props.userName}</div>
    </NavLink>
  );
};
const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};
const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <DialogItem userName="Hanna" id="1" />
        <DialogItem userName="Ann" id="2" />
        <DialogItem userName="Harry" id="3" />
      </div>

      <div className={style.messages}>
        <Message message="Hello" />
        <Message message="Yo" />
        <Message message="No" />
      </div>
    </div>
  );
};
export default Dialogs;
