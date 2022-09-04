import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}>Maxim </div>
        <div className={classes.dialog}>Vasyl </div>
        <div className={classes.dialog}>Stepn </div>
        <div className={classes.dialog}>Ignat </div>
        <div className={classes.dialog}>Petro </div>
        <div className={classes.dialog}>Maxim </div>
        <div className={classes.dialog}>Vasyl </div>
        <div className={classes.dialog}>Stepn </div>
        <div className={classes.dialog}>Ignat </div>
        <div className={classes.dialog}>Petro </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How is you IT</div>
        <div className={classes.message}>YO</div>
      </div>
    </div>
  );
};
export default Dialogs;
