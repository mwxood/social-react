import React from 'react';
import dialog from './Dialogs.module.css';
import DialogUsers from "./DialogUsers";
import DialogMessages from "./DialogMessages";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Mihail" },
        {id: 2, name: "Mihaela" },
        {id: 3, name: "Misho" }
    ];

    let messagesData = [
        {id: 1, message: "Hello" },
        {id: 2, message: "Hi" },
        {id: 3, message: "How are you?" }
    ];

    let dialogsElements = dialogsData
        .map( dialog => <DialogUsers id={dialog.id} dialogUser={dialog.name} />);

    let messagesElements = messagesData
        .map(messageData => <DialogMessages message={messageData.message} />);

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