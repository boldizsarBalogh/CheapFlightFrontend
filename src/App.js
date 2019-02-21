import React, { Component } from 'react';
import './App.css';
import Devwarning from "./components/devwarning";
import Search from "./components/search";
import Flights from "./components/flights";


class App extends Component {

    constructor(props){
        super(props);

        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            response : [],
            fromCity: '',
            toCity: '',
            cities: []

        }
    }

    componentDidMount() {
        this.getCities();
    }
    getCities() {
        fetch("http://localhost:8000/cities")
            .then(result => result.json())
            .then((res) => {
                this.setState({cities : res})

            })
            .catch(error => {
                console.log(error);});

    }
    handleFromChange = e => {
        this.setState({fromCity: e.target.value})
    }

    handleToChange = e =>{
        this.setState({toCity: e.target.value})
    }
    submitHandler() {

        fetch(`http://localhost:8000/search?startTown=${this.state.fromCity}&arriveTown=${this.state.toCity}`, {


        }).then(response => response.json())
            .then(res => {
                console.log(res);
                this.setState({response:res})
            })
            .catch(error => console.error("Error: ", error));
    };

  render() {
    return (
      <div className="App">
        <Devwarning/>
        <Search
        submitHandler={this.submitHandler}
        cities={this.state.cities}
        handleToChange ={this.handleToChange}
        handleFromChange ={this.handleFromChange}
        />
        <Flights
        flights = {this.state.response}
        />
      </div>
    );
  }
}

export default App;
