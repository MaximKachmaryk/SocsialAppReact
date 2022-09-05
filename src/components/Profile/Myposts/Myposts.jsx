import React from "react";
import classes from "./Myposts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postData=[
    
    { id: 1, message: "How is you IT",likesCoutn:12 },
    { id: 3, message: "My first post",likesCoutn:12 }]
  return (
    
    <div className={classes.postsBlock}>
      <h3>My Pots</h3>
      <div><textarea></textarea></div>
      <div><button></button></div>
      <Post massage={postData[0].message} likesCount={postData[0].likesCoutn} />
      <Post massage={postData[1].message} likesCount={postData[1].likesCoutn} />
      
      
      
    </div>
  );
};
export default MyPosts;
