import React from "react";
import style from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div className={style.info}>
      <div className={style.avatar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgkQqqZeEyj9J1dwi9aTwNaDTVaPWcBL28Q&usqp=CAU"></img>
      </div>
      <div className={style.profileInfo}>
        <ul>
          <li>Ибрагимов Адлан</li>
          <li>Веб-разработчик</li>
          <li>27.01.1995</li>
          <li>Спорт</li>
        </ul>
      </div>
    </div>
  );
};
export default ProfileInfo;
