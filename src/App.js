import React from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

import Footer from "./footer/Footer";
import './App.css';
import Profile from "./mainContent/Profile";
import Dialogs from "./dialogs/Dialogs";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="contentFlex">
        <Sidebar/>
        <div className="contentHolder">
            {/*<Profile/>*/}
           <Dialogs/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
