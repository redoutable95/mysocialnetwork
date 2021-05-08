import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      <div className={style.MyPosts}>
        <div className={style.NewPost}>
          <textarea placeholder="Whats new?"></textarea>
          <button>Add post</button>
        </div>
      </div>

      <Post text="lLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit deserunt a optio saepe voluptates dolores aut perspiciatis voluptatum eos eaque quos sequi, quidem, sapiente modi excepturi, veritatis enim omnis praesentium?" />
      <Post text="sit amet consectetur adipisicing elit. Reprehenderit deserunt a optio saepe voluptates dolores aut perspiciatis voluptatum eos eaque quos sequi, quidem," />

      <Post text="Reprehenderit deserunt a optio saepe voluptates dolores aut perspiciatis voluptatum eos eaque quos sequi, quidem, sapiente modi excepturi, veritatis enim omnis praesentium?" />
    </div>
  );
};
export default MyPosts;
