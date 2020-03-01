import React from 'react';
import dialog from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className={dialog.flexContent}>
            <div className={dialog.usersHolder}>
                Users
            </div>
            <div className={dialog.messagesHolder}>
                messages
            </div>
        </div>
    );
};

export default Dialogs;