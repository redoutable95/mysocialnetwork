import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
  return (
    <main>
      
      <ProfileInfo />
      <MyPosts />
     
    </main>
  );
};
export default Profile;
