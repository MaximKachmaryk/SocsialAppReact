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
  let dialogsData = [
    { id: 1, name: "Maxym" },
    { id: 2, name: "Roman" },
    { id: 3, name: "Petro" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Stepan" },
    { id: 6, name: "Volodymyr" }
  ]
  let messeges=[
    { id: 1, message: "Hi" },
    { id: 2, message: "How is you IT" },
    { id: 3, message: "YO" }
  ]
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        
      </div>
      <div className={classes.messages}>
        <Message message={messeges[0].message} />
        <Message message={messeges[1].message} />
        <Message message={messeges[2].message} />
      </div>
    </div>
  );
};
export default Dialogs;
