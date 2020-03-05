import React from 'react';
import posts from "./MyPost.module.css";

const MyPost = () => {

  return(
      <div className={posts.myPosts}>
          <h3>New post</h3>
          <form className={posts.postForm} action="">
              <textarea className={posts.textarea} name="" id="" cols="30" rows="10"></textarea>
              <button className={posts.submitBtn}>Add Post</button>
          </form>
      </div>
  );
};

export default MyPost;