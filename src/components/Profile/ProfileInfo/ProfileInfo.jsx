import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div >
      <img
        src="https://cutewallpaper.org/21/linkedin-background-images/chicago-skyline-linkedIn-background-Blackmore-Partners-Inc.jpg"
        alt="bg"
      />
      <div className={classes.descriptionBlock}>ava+description</div>
      
    </div>
  )
}
export default ProfileInfo;
