import React from "react";
import dialog from './Dialogs.module.css';

const DialogMessages = (props) => {
  return(
      <div className={dialog.message}>{props.message}</div>
  );
};

export default DialogMessages;