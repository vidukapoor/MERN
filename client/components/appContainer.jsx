import React, {Component} from "react";
import { Link } from 'react-router-dom'

class AppContainer extends Component{
    constructor(props){
        super(props);
        return this;
    }

    render(){
        return (
            <div>
                <Link to="/login">Login page</Link><br/>
                <Link to="/createUser">Create user</Link>
            </div>
        )   
    }
}
export default AppContainer;

