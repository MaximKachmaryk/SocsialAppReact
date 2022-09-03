import React from 'react'
import MyPosts from './Myposts/Myposts';
import classes from './Profile.module.css'

const Profile = () =>{
    return  <div className={classes.content}>
    <img src="https://cutewallpaper.org/21/linkedin-background-images/chicago-skyline-linkedIn-background-Blackmore-Partners-Inc.jpg" alt="bg" />
   
    <MyPosts/></div>
    
}
export default Profile;                              