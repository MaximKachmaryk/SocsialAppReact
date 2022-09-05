import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>{" "}
    </div>
  );
};
const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};
const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Maxym" id="1" />
        <DialogItem name="Roman" id="2" />
        <DialogItem name="Petro" id="3" />
        <DialogItem name="Vlad" id="4" />
        <DialogItem name="Stepan" id="5" />
        <DialogItem name="Volodymyr" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi" />
        <Message message="How is you IT" />
        <Message message="YO" />
      </div>
    </div>
  );
};
export default Dialogs;
