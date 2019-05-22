import React, { Component } from 'react';
import './App.css';
import Devwarning from "./components/devwarning";
import Search from "./components/search";
import Flights from "./components/flights";
import auth0 from 'auth0-js/dist/auth0.min';
import Login from './components/login';

class App extends Component {


    constructor(props){
        super(props);

        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.logout = this.logout.bind(this);
        this.authorize = this.authorize.bind(this);
        this.localLogin = this.localLogin.bind(this);


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
            logoutBtn : document.getElementById('btn-logout'),
            loginBtn : document.getElementById('btn-login'),
            loading : false

        }
    }
    localLogin(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Set the time that the access token will expire at
        this.setState({
            expiresAt : JSON.stringify(
                authResult.expiresIn * 1000 + new Date().getTime()
            )
        });
        this.setState({
            accessToken : authResult.accessToken
        });

        localStorage.setItem("accessToken", this.state.accessToken);
        this.setState({
            idToken : authResult.idToken
        });
        localStorage.setItem("idToken", this.state.idToken);
    }
    logout() {
        // Remove isLoggedIn flag from localStorage
        localStorage.clear();
        // Remove tokens and expiry time
        this.setState({
            accessToken : ''
        });
        this.setState({
            idToken :''
        });
        this.setState({
            expiresAt : 0
        });
        this.setState({
            response : []
        })

    }
    authorize(){
        if(localStorage.getItem("isLoggedIn") === "true"){
            alert("Be vagy lépve HÉ!")
        }else {
            this.state.webAuth.authorize();
        }
    }
    handleAuthentication(login) {
        try {
            this.state.webAuth.parseHash(function(err, authResult){
                console.log(authResult.toString());
                if (authResult && authResult.accessToken && authResult.idToken) {
                    window.location.hash = '';
                    login(authResult);
                } else if (err) {
                    console.log(err);
                    alert(
                        'Error: ' + err.error + '. Check the console for further details.'
                    );
                }
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
    };

    handleToChange = e =>{
        this.setState({toCity: e.target.value})
    };
    submitHandler() {
        this.setState({loading : true})
        fetch(`http://localhost:8000/search?startTown=${this.state.fromCity}&arriveTown=${this.state.toCity}`, {
            headers: new Headers({
                'Authorization' : 'Bearer ' + localStorage.getItem("accessToken")
            })

        }).then(response => response.json())
            .then(res => {
                this.setState({response:res})
                this.setState({loading: false})
            })
            .catch(error => {
                this.setState({loading: false})
                alert("not yet authorized")});
    };


  render() {
    return (
      <div className="App" onLoad={this.handleAuthentication(this.localLogin)}>
        <Login
        logoutEvent = {this.logout}
        loginEvent = {this.authorize}
        />
        <Devwarning/>
        <Search
        submitHandler={this.submitHandler}
        cities={this.state.cities}
        handleToChange ={this.handleToChange}
        handleFromChange ={this.handleFromChange}
        />
        <Flights
        flights = {this.state.response}
        loading = {this.state.loading}
        />
      </div>
    );
  }
}

export default App;
