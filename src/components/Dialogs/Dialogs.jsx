import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

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
