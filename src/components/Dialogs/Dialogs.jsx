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
  let dialogsData = [
    { id: 1, userName: "Aslambek" },
    { id: 2, userName: "Mars" },
    { id: 3, userName: "Cactus" },
  ];

  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 1, message: "Hi" },
    { id: 1, message: "How r u?" },
  ];

  let dialogElements = dialogsData.map((users) => (
    <DialogItem userName={users.userName} id={users.id} />
  ));
  let messageElements = messagesData.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}> {dialogElements} </div>
      <div className={style.messages}> {messageElements} </div>
    </div>
  );
};
export default Dialogs;
