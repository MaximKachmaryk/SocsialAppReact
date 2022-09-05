import React from "react";
import classes from "./Myposts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "How is you IT", likesCoutn: 12 },
    { id: 3, message: "My first post", likesCoutn: 12 },
  ];
  let postsElements = posts.map((p) => (
    <Post massage={p.message} likesCount={p.likesCoutn} />
  ));
  return (
    <div className={classes.postsBlock}>
      <h3>My Pots</h3>

      <div>
        <textarea></textarea>
      </div>

      <div>
        <button></button>
      </div>
      {postsElements}
    </div>
  );
};
export default MyPosts;
