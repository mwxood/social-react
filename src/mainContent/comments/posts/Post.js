import React from 'react';
import p_comments from "./Post.module.css";


const Post = () => {
    return(
        <div className={p_comments.postItem}>
            <div className={p_comments.postHolder}>
                <span className={p_comments.avatarHolder}>
                    <img src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" alt=""/>
                </span>
                post 1
            </div>
        </div>
    );
};

export default Post;

