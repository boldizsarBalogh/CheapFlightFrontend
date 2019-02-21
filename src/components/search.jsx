
import React, {Component} from 'react';

class Search extends Component {
    render() {
        return <div className="home_search">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="home_search_container">
                            <div className="home_search_title">Search for your trip</div>
                            <div className="home_search_content">
                                <form action="#" className="home_search_form" id="home_search_form">
                                    <div
                                        className="d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start">
                                        <input type="text" className="search_input search_input_1" placeholder="City"
                                               required="required"></input>
                                        <input type="text" className="search_input search_input_2"
                                               placeholder="Departure"
                                               required="required"></input>
                                        <input type="text" className="search_input search_input_3" placeholder="Arrival"
                                               required="required"></input>
                                        <input type="text" className="search_input search_input_4"
                                               placeholder="Budget" required="required"></input>
                                            <button className="home_search_button">search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Search;

