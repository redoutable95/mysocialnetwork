import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img
          src="https://yug-avto-servis.ru/img/logo/whatsapp-logo.svg.png"
          alt=""
        />
      </div>
    </header>
  );
};
export default Header;
