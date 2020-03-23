import React from 'react';
import dialog from './Dialogs.module.css';
import DialogUsers from "./DialogUsers";
import DialogMessages from "./DialogMessages";
import {addNewMessageActionCreator, updateMessageActionCreator} from "../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map( (dialog, i) => <DialogUsers id={dialog.id} key={i} name={dialog.name} />);

    let messagesElements = props.state.messages
        .map((messageData, i) => <DialogMessages key={i} message={messageData.message} src={messageData.src}   />);

     let message = React.createRef();

     let addMessage = () => {
         let text = message.current.value;
         if(!text) {
             return;
         }
         props.dispatch(addNewMessageActionCreator());
     };

    let onMessageChange = (e) => {
        e.preventDefault();
        let text = message.current.value;
        props.dispatch(updateMessageActionCreator(text));
    };

    return(
        <div className={dialog.flexContent}>
            <div className={dialog.usersHolder}>
                {dialogsElements}
            </div>
            <div className={dialog.messagesHolder}>
               {messagesElements}
                <textarea ref={message}  onChange={onMessageChange}  className={dialog.messageForm} value={props.state.messageValue} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={addMessage} className={dialog.button}>Add message</button>
            </div>
        </div>
    );
};

export default Dialogs;