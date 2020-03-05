import React from "react";
import dialog from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogUsers = (props) => {
    let path = "/dialogs/" + props.id;
      return(
          <div className={dialog.item}>
              <NavLink to={path}>{props.name}</NavLink>
          </div>
      );
};

export default DialogUsers;