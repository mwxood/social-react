import React from 'react';
import p_comments from "./Post.module.css";


const Post = (props) => {
    return(
        <div className={p_comments.postItem}>
            <div className={p_comments.postHolder}>
                <span className={p_comments.avatarHolder}>
                    <img src={props.avatarImage} alt=""/>
                </span>
                <div>
                {props.message}
                <div>Like {props.likeCounts}</div>
                </div>
            </div>
        </div>
    );
};

export default Post;

