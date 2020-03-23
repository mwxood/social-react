import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profileReducer";
import MyPost from "./MyPost";
import Comments from "../comments/Comments";


const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (text) => {
       props.store.dispatch(updatePostActionCreator(text));
    };

  return(
      <div>
          <MyPost
              updateNewPostText={updateNewPostText}
              addPost={addPost}
              newPostText={state.profilePage.newPostText}
          />
          <Comments
              posts={state.profilePage.posts}
          />
      </div>
  );
};

export default MyPostContainer;

