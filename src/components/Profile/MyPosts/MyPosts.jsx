import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let textData = [
    { id: 1, text: "Faaaasdfw" },
    { id: 1, text: "Hi" },
    { id: 1, text: "How r u?" },
  ];
  let postText = textData.map((text) => <Post text={text.text} id={text.id} />);
  return (
    <div>
      <div className={style.MyPosts}>
        <div className={style.NewPost}>
          <textarea placeholder="Whats new?"></textarea>
          <button>Add post</button>
        </div>
      </div>

      {postText}
    </div>
  );
};
export default MyPosts;
