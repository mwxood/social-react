import React from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import Footer from "./footer/Footer";
import './App.css';
import Profile from "./mainContent/Profile";
import Dialogs from "./dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import News from "./news/News";

const App = (props) => {

  return (
    <div className="App">
          <Header/>
          <div className="contentFlex">
            <Sidebar state={props.state.sidebar}/>
            <div className="contentHolder">
                <Route path="/dialogs" render={() => <Dialogs
                    state={props.state.dialogsPage}
                    newMessage={props.newMessage}
                    updateMessage={props.updateMessage}
                />}
                />
                <Route path="/profile" render={() => <Profile
                    state={props.state.profilePage}
                    addPost={props.addPost}
                    updatePostText={props.updatePostText}
                />} />
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
          </div>
          <Footer/>
    </div>
  );
};

export default App;
