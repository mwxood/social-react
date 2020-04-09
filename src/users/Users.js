import React from 'react';
import user from './Users.module.css'

const Users = (props) => {

    return(
        <div className={user.userHolder}>
            {
                props.user.map(u => <div key={u.id} className={user.userContainer}>
                    <div className={user.image}>
                        <img src={u.photoUrl} alt=""/>
                        {u.followed
                            ?  <button onClick={() => {props.unfollow(u.id)}} className={user.button}>{props.unfollow.name}</button>
                            :  <button onClick={() => {props.follow(u.id)}} className={user.button}>{props.follow.name}</button>}

                    </div>
                    <div className={user.infoHolder}>
                        <div className={user.info}>
                            <span className={user.name}>{u.fullname}</span>
                            <span className={user.status}>{u.status}</span>
                        </div>
                        <div className={user.locationHolder}>
                            <span>{u.location.city}</span>
                            <span>{u.location.country}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;