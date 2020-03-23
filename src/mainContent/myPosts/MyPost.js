import React from 'react';
import posts from "./MyPost.module.css";
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";


const MyPost = (props) => {
    let newPostElement = React.createRef();

    let addNewPost = (e) => {
        e.preventDefault();
        let text = newPostElement.current.value;
        if(!text) {
            return;
        }
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        e.preventDefault();
      let text = newPostElement.current.value;
      props.dispatch(updatePostActionCreator(text));
    };


  return(
      <div className={posts.myPosts}>
          <h3>New post</h3>
          <form className={posts.postForm} action="">
              <textarea ref={newPostElement} onChange={onPostChange} className={posts.textarea} name="" id="" cols="30" rows="10" value={props.state.newPostText} />
              <button onClick={addNewPost} className={posts.submitBtn}>Add Post</button>
          </form>
      </div>
  );
};

export default MyPost;