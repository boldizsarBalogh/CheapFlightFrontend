import React, {Component} from 'react';

class Alert extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    The site is still under development!!!
                </div>
            </div>
        );
    }
}

export default Alert;