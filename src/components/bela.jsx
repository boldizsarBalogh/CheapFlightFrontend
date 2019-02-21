import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Bela extends Component{

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

    handleFromChange=(event)=>{
        this.setState(state => ({ fromCity:event.target.value }));
        console.log(this.state.fromCity);
    }
    handleToChange=(event)=>{
        this.setState({toCity:event.target.value});
        console.log(this.state.toCity);

    }

    render() {
        return (
            <form>
                <p>{this.state.response}</p>
                Choose Start:
                <select value={this.state.fromCity} onChange={this.handleFromChange.bind(this)} id="startCity">{this.state.response.map((x,y)=> <option key = {y}>{x}</option>)}
                </select><br/>
                Choose Arrive:
                <select value={this.state.toCity} onChange={this.handleToChange} id="arriveCity">{this.state.response.map((x,y)=> <option key = {y}>{x}</option>)}
                </select><br/>
                <button onClick={this.sendData} className="btn btn-secondary btn-sm" type="submit" value = "Submit">Search</button>
            </form>
        );
    }

    sendData(event) {
        event.preventDefault()
        const data = "Szia Indi";
        fetch("http://localhost:8000/", {
            method:'POST',
            headers: {"City": "application/json"},
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => console.log("Success: ", JSON.stringify(response)));
        //     .catch(error => console.error("Error: ", error));
    }
}

export default Bela;
