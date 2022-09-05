import React from "react";
import classes from "./Myposts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  return (
    <div className={classes.postsBlock}>
      <h3>My Pots</h3>
      <div><textarea></textarea></div>
      <div><button></button></div>
      <Post massage="how are you" likesCount="0" />
      <Post massage="i am ok" />
      
      
      
    </div>
  );
};
export default MyPosts;
