import React from 'react'
import MyPosts from './Myposts/Post/Myposts';
import classes from './Profile.module.css'

const Profile = () =>{
    return  <div className={classes.content}>
    <img src="https://cutewallpaper.org/21/linkedin-background-images/chicago-skyline-linkedIn-background-Blackmore-Partners-Inc.jpg" alt="bg" />
    <div className={classes.posts}>My post</div>
    <div className={classes.item}>New post</div>
    <div className={classes.item}>post 1</div>
    <div className={classes.item}>post 1</div>
    <MyPosts/></div>
    
}
export default Profile;                              