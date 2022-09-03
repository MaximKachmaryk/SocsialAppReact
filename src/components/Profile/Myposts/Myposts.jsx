import React from 'react'
import classes from './Myposts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
    return <div className={classes.posts}>
       
        
        <Post massage ='how are you'/> 
        <Post massage ="i am ok"/>
       
  </div>
}
export default MyPosts;                              