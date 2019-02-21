import React, { Component } from 'react';
import './App.css';
import './components/navbar'
import Navbar from "./components/navbar";
import Alert from "./components/alert";
import Psearch from "./components/psearch";


class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar/>
        <Alert/>
        <Psearch/>
      </div>
    );
  }
}

export default App;
