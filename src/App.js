import React, { Component } from 'react';
import './App.css';
import Devwarning from "./components/devwarning";
import Search from "./components/search";
import Flights from "./components/flights";
import auth0 from 'auth0-js/dist/auth0.min'


class App extends Component {


    constructor(props){
        super(props);

        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            response : [],
            fromCity: 'Brussels',
            toCity: 'Budapest',
            cities: [],
            idToken: '',
            accessToken: '',
            expiresAt: '',
            webAuth : new auth0.WebAuth({
                domain: 'zsivany.eu.auth0.com',
                clientID: 's1vJBtSpTOn1YUibX5fDF8Qp3MYB6-Lg',
                responseType: 'token id_token',
                scope: 'admin:todos',
                audience: 'https://quickstarts/api',
                redirectUri: window.location.href
            }),
            loginStatus : document.querySelector('.container h4'),
            loginView : document.getElementById('login-view'),
            homeView : document.getElementById('home-view'),
            homeViewBtn : document.getElementById('btn-home-view'),
            logoutBtn : document.getElementById('btn-logout'),
            loginBtn : document.getElementById('btn-login')

        }
    }
    localLogin(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Set the time that the access token will expire at
        this.state.expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );
        this.state.accessToken = authResult.accessToken;
        localStorage.setItem("accessToken", this.state.accessToken);
        this.state.idToken = authResult.idToken;
        localStorage.setItem("idToken", this.state.idToken);
    }
    logout() {
        // Remove isLoggedIn flag from localStorage
        localStorage.clear();
        // Remove tokens and expiry time
        this.state.accessToken = '';
        this.state.idToken = '';
        this.state.expiresAt = 0;
        this.displayButtons();
    }
    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiration = parseInt(this.state.expiresAt) || 0;
        return localStorage.getItem('isLoggedIn') === 'true' && new Date().getTime() < expiration;
    }
    displayButtons() {
        if (this.isAuthenticated()) {
            this.state.loginBtn.style.display = 'none';
            this.state.logoutBtn.style.display = 'inline-block';
            this.state.loginStatus.innerHTML = 'You are logged in!';
        } else {
            this.state.loginBtn.style.display = 'inline-block';
            this.state.logoutBtn.style.display = 'none';
            this.state.loginStatus.innerHTML =
                'You are not logged in! Please log in to continue.';
        }
    }
    handleAuthentication() {
        try {
            this.state.webAuth.parseHash(function(err, authResult){
                console.log(authResult.toString());
                if (authResult && authResult.accessToken && authResult.idToken) {
                    window.location.hash = '';
                    this.state.localLogin(authResult);
                    this.state.loginBtn.style.display = 'none';
                    this.state.homeView.style.display = 'inline-block';
                } else if (err) {
                    this.state.homeView.style.display = 'inline-block';
                    console.log(err);
                    alert(
                        'Error: ' + err.error + '. Check the console for further details.'
                    );
                }
                this.displayButtons();
            });
        }catch(TypeError){
            console.log("not yet authenticated")
        }
    }

    componentDidMount() {
        this.getCities();
    }
    getCities() {
        fetch("http://localhost:8000/cities",{
            headers: new Headers({
                'Authorization' : 'Bearer ' + localStorage.getItem("accessToken")
            })
        })
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
