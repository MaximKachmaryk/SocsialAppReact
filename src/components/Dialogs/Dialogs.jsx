import React from "react";
import classes from "./Dialogs.module.css";
/* import { NavLink } from "react-router-dom"; */

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messege/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Maxym" },
    { id: 2, name: "Roman" },
    { id: 3, name: "Petro" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Stepan" },
    { id: 6, name: "Volodymyr" },
  ];
  
  let messeges = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is you IT" },
    { id: 3, message: "YO" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let massageElements = messeges.map((m) => <Message message={m.message} />);
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{massageElements}</div>
    </div>
  );
};

export default Dialogs;
