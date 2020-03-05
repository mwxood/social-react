import React from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import Footer from "./footer/Footer";
import './App.css';
import Profile from "./mainContent/Profile";
import Dialogs from "./dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import News from "./news/News";

const App = (props) => {

  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <div className="contentFlex">
            <Sidebar/>
            <div className="contentHolder">
                {/*<Route path="/dialogs" component={Dialogs} />*/}
                <Route path="/dialogs" render={() => <Dialogs users={props.users} messages={props.messages}/>} />
                <Route path="/profile" render={() => <Profile posts={props.posts}/>} />
                {/*<Route path="/profile" component={Profile}/>*/}
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
          </div>
          <Footer/>
        </BrowserRouter>
    </div>
  );
};

export default App;
