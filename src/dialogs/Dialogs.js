import React from 'react';
import DialogsContainer from "./DialogsContainer";

const Dialogs = (props) => {

    return(
       <DialogsContainer
           store={props.store}
       />
    );
};

export default Dialogs;