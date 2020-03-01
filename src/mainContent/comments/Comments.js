import React from 'react';
import comments from "./Comments.module.css";
import Post from "./posts/Post";



const Comments = () => {
    return(
        <div className={comments.postComments}>
            <h3>All Posts</h3>
            <Post likeCounts="23" message="Hi, how are you?" avatarImage="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" />
            <Post likeCounts="10" message="It's my first post" avatarImage="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg" />
        </div>
    );
};

export default Comments;