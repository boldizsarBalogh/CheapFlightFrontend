import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/navbar'
import Navbar from "./components/navbar";
import Alert from "./components/alert";
import Flights from "./components/flights";


class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar/>
        <Alert/>
        <Flights/>
      </div>
    );
  }
}

export default App;
