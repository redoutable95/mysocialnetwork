import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={style.MyPosts}>
      <div className={style.NewPost}>
        <textarea placeholder="Whats new?"></textarea>
        <button>Add post</button>
      </div>
    </div>
  );
};
export default MyPosts;
