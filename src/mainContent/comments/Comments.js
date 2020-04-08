import React from 'react';
import comments from "./Comments.module.css";
import Post from "./posts/Post";


const Comments = (props) => {
    let postElement = props.posts.posts.map((post, i) => <Post likeCounts={post.likesCount} key={i} message={post.post} avatarImage={post.src} />);

    return(
        <div className={comments.postComments}>
            <h3>My Posts</h3>
            {postElement}
       </div>
    );
};

export default Comments;