import React from 'react';
import comments from "./Comments.module.css";
import Post from "./posts/Post";



const Comments = () => {
    return(
        <div className={comments.postComments}>
            <h3>All Posts</h3>
            <Post />
        </div>
    );
};

export default Comments;