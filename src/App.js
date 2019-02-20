import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/navbar'
import Navbar from "./components/navbar";
import Alert from "./components/alert";
import Flights from "./components/flights";
import Bela from "./components/bela";


class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar/>
        <Alert/>
        <Flights/>
        <Bela/>
      </div>
    );
  }
}

export default App;
