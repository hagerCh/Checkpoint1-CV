import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import General from './components/General';
import Specific from './components/Specific';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <General className="col-md-4"/>
        <Specific className="col-md-8"/>
      </div>
    );
  }
}

export default App;
