import React from 'react';
import sidebar from '../Sidebar.module.css';

const FriendsItem = (props) => {

    return(
        <div className={sidebar.friendsItem}>
           <span className={sidebar.friendsImage}> <img src={props.src} alt="example" /></span>
           <span className={sidebar.friendName}>{props.name}</span>
        </div>
    );
};

export default FriendsItem;