import React from "react";
import dialog from './Dialogs.module.css';

const DialogMessages = (props) => {
  return(
     <div className={dialog.messageHolder}>
       <span className={dialog.avatarImage}>
         <img src={props.src} alt=""/>
       </span>
       <div className={dialog.message}>
         {props.message}
       </div>

     </div>
  );
};

export default DialogMessages;