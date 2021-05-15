import React from "react";
import style from "./Post.module.css";
const Post = (props) => {
 
  return (
    <div className={style.posts}>
      <div className={style.avatar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgkQqqZeEyj9J1dwi9aTwNaDTVaPWcBL28Q&usqp=CAU"></img>
      </div>
      <div className={style.userName}>{props.id}</div>
      <div className={style.post}>{props.text}</div>
    </div>
  );
};
export default Post;
