// src/App.js
import React from 'react';
import Contacts from './Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts List App</h1>
        <Contacts />
      </header>
    </div>
  );
}

export default App;
