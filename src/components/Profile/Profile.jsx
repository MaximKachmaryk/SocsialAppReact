import React from "react";
import MyPost from "./Myposts/Myposts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};
export default Profile;
