import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Navbar extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                <div
                                    className="header_content_inner d-flex flex-row align-items-end justify-content-start">
                                    <div className="logo"><a href="index.html">Travello</a></div>
                                    <nav className="main_nav">
                                        <ul className="d-flex flex-row align-items-start justify-content-start">
                                            <li className="active"><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="news.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                    <div className="header_phone ml-auto">Call us: 00-56 445 678 33</div>

                                    <div className="hamburger ml-auto">
                                        <i className="fa fa-bars" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_social d-flex flex-row align-items-center justify-content-start">
                    <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Navbar;