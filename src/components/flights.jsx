import React, {Component} from 'react';

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
            <span>{JSON.stringify(this.state.response)}</span>
            </div>
        );
    }
}

export default Flights;