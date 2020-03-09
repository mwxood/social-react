import React from "react";
import content from './Content.module.css';
import MyPost from "./myPosts/MyPost";
import Comments from "./comments/Comments";


const Profile = (props) => {
    return(
        <main className={content.content}>
            <div className={content.imageHolder}>
                <img src="https://madzharovo.com/mywordpress/wp-content/uploads/2016/03/%D0%BF%D1%8A%D1%80%D0%B2%D0%B8-%D1%81%D0%BD%D0%B8%D0%BC%D0%BA%D0%B8-%D0%BE%D1%82-%D0%B0%D0%BF%D0%B0%D1%80%D0%B0%D1%82-%D0%B8-%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%B0-127-2.jpg" height="350" alt=""/>
            </div>
            <div className={content.profileHolder}>
                <img src="data:image/jpeg;base64,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" alt=""/>
                <div className={content.profileText}>
                    dasdasd
                </div>
            </div>
           <MyPost />
           <Comments state={props.state.posts}/>
        </main>
    );
};

export default Profile;