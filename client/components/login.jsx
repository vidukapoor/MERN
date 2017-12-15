import React, { Component } from "react";
import Utils from "../utils/requests"
import { Redirect } from 'react-router-dom';
import { DEFAULT_BASEPATH } from "../utils/constants.js";
const loginuserPath = DEFAULT_BASEPATH + "/login"

class Login extends Component {
    constructor(props) {
        super(props);
        this.object = {}
        this.state = { isLogin: false };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.getAllValues = this.getAllValues.bind(this);
    }

    handleLogin() {
        const isRequired = Utils.fieldValidations(this.refs);
        if (isRequired) {
            alert(isRequired);
            return;
        }
        console.log(this.object)
        Utils.sendXmlHttpRequest(loginuserPath, 'POST', this.object, (result, error) => {
            console.log(result)
            if (result && result.success) {
                alert('login success');
                this.setState({ isLogin: true })
            } else {
                alert('login error')
            }
        })
    }

    getAllValues(fieldName, value) {
        this.object[fieldName] = value
    }

    handleKeyPress(target) {
        if (target.charCode == 13) {
            this.handleLogin();
        }
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div>{isLogin ? <Redirect to="/home" /> : <div onKeyPress={this.handleKeyPress}>
                <h2>Login </h2>
                email: <input type="email" placeholder="email" ref={"email"} data-required={true} errmsg={"email is required"} onChange={event => this.getAllValues('email', event.target.value)} /><br />
                password: <input type="password" placeholder="password" ref={"password"} data-required={true} errmsg={"password is required"} onChange={event => this.getAllValues('password', event.target.value)} /><br />
                <button onClick={this.handleLogin}>Login User</button>
            </div>}
            </div>)
    }
}
export default Login;