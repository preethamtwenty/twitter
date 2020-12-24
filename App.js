import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './feed';
import Widgets from './widgets';

function App() {
  return (
    <div className="app">
    
    <Sidebar></Sidebar>
    
    <Feed/>
    <Widgets/>
    
    </div>
  );
}

export default App;
