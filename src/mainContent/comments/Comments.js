import React from 'react';
import comments from "./Comments.module.css";
import Post from "./posts/Post";



const Comments = () => {

    let postData = [
        {id: 1, post: "Hi, how are you?", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 12 },
        {id: 2, post: "It's my first post", src: "https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg", likesCount: 18}
    ];

    let postElement = postData.map((post, i) => <Post likeCounts={post.likesCount} key={i} message={post.post} avatarImage={post.src} />);

    return(
        <div className={comments.postComments}>
            <h3>My Posts</h3>
            {postElement}
        </div>
    );
};

export default Comments;