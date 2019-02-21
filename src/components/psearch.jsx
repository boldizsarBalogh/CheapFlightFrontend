import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Psearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            response : [],
            fromCity: '',
            toCity: ''

        }
    }

    componentDidMount() {
        this.getCities();
    }

    getCities() {
        fetch("http://localhost:8000/cities")
            .then(result => result.json())
            .then((res) => {
                this.setState({response : res})
            })
            .catch(error => {
                console.log(error);});

    }

    handleFromChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleToChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        var data = new FormData();
        const payload = {
            fromCity: this.fromCity,
            toCity: this.toCity
        };
        data.append("myjsonkey", JSON.stringify(payload));
        fetch("http://localhost:8000/", {
            method: 'POST',
            body: data
        }).then(response => console.log("Success: ", JSON.stringify(response)))
            .catch(error => console.error("Error: ", error));
    }

    render() {
        const {fromCity, toCity} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                Choose Start:
                <select name="fromCity" value={fromCity} onChange={this.handleFromChange}>{this.state.response.map((x,y)=> <option key = {y}>{x}</option>)}</select>
                <br/>
                Choose Arrive:
                <select name="toCity" value={toCity} onChange={this.handleToChange}>{this.state.response.map((x,y)=> <option key = {y}>{x}</option>)}</select>
                <br/>
                <button className="btn btn-secondary btn-sm" type="submit">Search</button>
            </form>
        );
    }

}

export default Psearch;