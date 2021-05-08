import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
  return (
    <main>
      <div className={style.cover}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />
      </div>
      <ProfileInfo />
      <MyPosts />
     
    </main>
  );
};
export default Profile;
