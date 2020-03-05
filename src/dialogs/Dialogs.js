import React from 'react';
import dialog from './Dialogs.module.css';
import DialogUsers from "./DialogUsers";
import DialogMessages from "./DialogMessages";

const Dialogs = (props) => {

    let dialogsElements = props.users
        .map( (dialog, i) => <DialogUsers id={dialog.id} key={i} name={dialog.name} />);

    let messagesElements = props.messages
        .map((messageData, i) => <DialogMessages key={i} message={messageData.message} />);

    return(
        <div className={dialog.flexContent}>
            <div className={dialog.usersHolder}>
                {dialogsElements}
            </div>
            <div className={dialog.messagesHolder}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;