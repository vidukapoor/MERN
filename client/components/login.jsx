import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.object = {}
        this.state = { isLogin: false }
        this.handleLogin = this.handleLogin.bind(this);
        this.getAllValues = this.getAllValues.bind(this);
    }
    handleLogin() {
        alert('login done')
        this.setState({ isLogin: true })
    }
    getAllValues(fieldName, value) {
        this.object[fieldName] = value
    }
    render() {
        const { isLogin } = this.state;
        return (
            <div>{isLogin ? <Redirect to="/home" /> : <div>
                <h2>Login </h2>
                email: <input type="email" placeholder="email" onChange={event => this.getAllValues('email', event.target.value)} /><br />
                password: <input type="password" placeholder="password" onChange={event => this.getAllValues('password', event.target.value)} /><br />
                <button onClick={this.handleLogin}>Login User</button>
            </div>}
            </div>)
    }
}
export default Login;