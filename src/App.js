import logo from './logo.svg';
import './App.css';
import PhilosopherGraph from "./Components/PhilosopherGraph/PhilosopherGraph";
import { React, useState } from "react";
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="graph-wrapper">
          <PhilosopherGraph />
        </div>
      </header>
    </div>
  );
}

export default App;
