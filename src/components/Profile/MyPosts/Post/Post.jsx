import React from "react";
import style from "./Post.module.css";
const Post = () => {
  return (
    <div className={style.posts}>
      <div className={style.avatar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgkQqqZeEyj9J1dwi9aTwNaDTVaPWcBL28Q&usqp=CAU"></img>
      </div>
      <div className={style.userName}>Adlan Ibragimov</div>
      <div className={style.post}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate
        dolorum, pariatur aspernatur perspiciatis ipsum eaque dolore ea, ipsam
        enim dignissimos fugiat nemo voluptatem eius ad obcaecati? Consequuntur,
        pariatur at!
      </div>
    </div>
  );
};
export default Post;
