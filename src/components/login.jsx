import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
        <div>
            <div className="content">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button id="btn-login" onClick={() => this.props.loginEvent()} className="btn btn-primary btn-margin">
                                Log In
                            </button>
                            <button id="btn-logout" onClick={() => this.props.logoutEvent()} className="btn btn-primary btn-margin">
                                Log Out
                            </button>
                        </div>
                    </div>
                </nav>


            </div>
        </div>
        );
    }
}

export default Login;