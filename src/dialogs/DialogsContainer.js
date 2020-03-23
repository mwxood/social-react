import React from 'react';
import {addNewMessageActionCreator, updateMessageActionCreator} from "../redux/dialogsReducer";
import DialogItems from "./DialogItems";

const Dialogs = (props) => {
    let state = props.store.getState();

     let addMessage = () => {
         props.store.dispatch(addNewMessageActionCreator());
     };

    let changeMessage = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    };

    return(
       <DialogItems
           changeMessage={changeMessage}
           addMessage={addMessage}
           newPostText={state.dialogsPage.messageValue}
           dialogs={state.dialogsPage.dialogs}
           messages={state.dialogsPage.messages}
       />
    );
};

export default Dialogs;