import React, { Component } from "react";
import { Link } from 'react-router-dom'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        return this;
    }

    render() {
        return (
            <div>
                <Link to="/login"><button>Login page</button></Link> &nbsp;&nbsp;
                <Link to="/createUser"><button>Create user</button></Link>
            </div>
                    )   
    }
}
export default AppContainer;

