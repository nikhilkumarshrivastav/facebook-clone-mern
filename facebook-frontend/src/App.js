import React from 'react';
import './App.css';
import Feed from './Components/Feed'
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Widget from './Components/Widget'

function App() {
  return (
    <div className="App">
        <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
