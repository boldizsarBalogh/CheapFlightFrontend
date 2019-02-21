import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Flight from "./flight";



class Flights extends Component {

    constructor(props){
        super(props);
        this.state = {
            response : []

        }
    }

    componentDidMount() {
        this.getFlights();
    }

    getFlights() {
         fetch("http://localhost:8000/")
             .then(result => result.json())
             .then((res) => {
                 this.setState({response : res})
             })
             .catch(error => {
                 console.log(error);});

    }


    render() {
        return (

            <div>
                <button className="btn btn-success btn-block" type="button" data-toggle="collapse" data-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample">
                    All of our flights so far
                </button>
                <div className="collapse" id="collapseExample">

                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">From</th>
                                <th scope="col">Arrive at</th>
                                <th scope="col">Date</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
                                <th scope="col">Class</th>
                                <th scope="col">Price($)</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.response.map(item => <Flight company={item.company} startTown={item.startTown} arriveTown={item.arriveTown} date={item.date} startTime={item.startTime} arriveTime={item.arriveTime} confort={item.confort} price={item.price}/>)}
                            </tbody>
                        </table>
                </div>

            </div>
        );
    }
}




export default Flights;