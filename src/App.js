import React, { Component } from 'react';
import './App.css';
import './components/navbar'
import Navbar from "./components/navbar";
import Devwarning from "./components/devwarning";
import Psearch from "./components/psearch";
import Search from "./components/search";
// import Background from "./components/background";


class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar/>
        <Devwarning/>
        <Psearch/>
        <Search/>
      </div>
    );
  }
}

export default App;
