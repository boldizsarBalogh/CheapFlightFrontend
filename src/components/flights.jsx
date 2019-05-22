import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Flight from "./flight";



class Flights extends Component {

    constructor(props){
        super(props);
        this.state = {
            response : props.flights,
            flights : []

        }
    }



    render() {
        if(this.props.loading === true){
            return(
                <>
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </>
            )
        }
        if (this.props.flights.status === 500){
            alert("status code 500 internal server error :(");
            return <span></span>
        }
        if (this.props.flights.status === 401) {
            alert("status code 401 not authorized!!");
            return <span></span>
        }
        if (this.props.flights.length > 0) {
             return (

                <div>
                    <button className="btn btn-success btn-block" type="button" data-toggle="collapse"
                            data-target="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample">
                        ˇˇˇ Flight search results ˇˇˇ
                    </button>
                    <div className="collapse" id="collapseExample">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Origin</th>
                                <th scope="col">Destination</th>
                                <th scope="col">Date</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
                                <th scope="col">Class</th>
                                <th scope="col">Price($)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.flights.map(item => <Flight company={item.company} startTown={item.startTown}
                                                                    arriveTown={item.arriveTown} date={item.date}
                                                                    startTime={item.startTime}
                                                                    arriveTime={item.arriveTime} confort={item.confort}
                                                                    price={item.price}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return <span></span>
        }
    }
}




export default Flights;