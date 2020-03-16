import React from 'react';
import sidebar from '../Sidebar.module.css';
import FriendsItem from "./FriendsItem";

const Friends = (props) => {
    let friends = props.state
        .map((friends, i) =>  <FriendsItem id={friends.id} key={i} name={friends.name} src={friends.src} />);

    return(
        <div className={sidebar.friends}>
            {friends}
        </div>
    );
};

export default Friends;