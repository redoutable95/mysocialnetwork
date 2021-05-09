import React from "react";
import style from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div className={style.cover}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />
      </div>
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
    </div>
  );
};
export default ProfileInfo;
