import React from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Content from "./mainContent/Content";
import Footer from "./footer/Footer";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="contentFlex">
        <Sidebar/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
