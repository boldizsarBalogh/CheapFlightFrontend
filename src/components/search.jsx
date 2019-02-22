
import React, {Component} from 'react';


class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }



    render() {
        return <div className="home_search">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="home_search_container">
                            <div className="home_search_title">Search for your trip</div>
                            <div className="home_search_content">
                                {/*<form className="home_search_form" id="home_search_form">*/}
                                    <div
                                        className="d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start">
                                        <select name="fromCity"   onChange={this.props.handleFromChange}>{this.props.cities.map((item)=> <option selected>{item.name}</option>)}</select>
                                        <select name="toCity"   onChange={this.props.handleToChange}>{this.props.cities.map((item)=> <option >{item.name}</option>)}</select>
                                            <button onClick={() => this.props.submitHandler()} className="home_search_button">search</button>
                                    </div>
                                {/*</form>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Search;

