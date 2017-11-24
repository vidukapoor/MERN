import React, {Component} from "react";

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.object = {}
        this.handleSave = this.handleSave.bind(this);
        this.getAllValues = this.getAllValues.bind(this);
        return this;
    }

    handleSave (){
        console.log(this.object)
    }
    
    getAllValues(fieldName, value){
        this.object[fieldName] = value
    }

    render(){
        return (
            <div>
                <h2>User details</h2>
                <input placeholder="name" type="text" onChange={event => this.getAllValues("name", event.target.value)}/>
                <br/>
                <input placeholder="phone number" type="number" onChange={event => this.getAllValues("contact", event.target.value)}/>
                <br/>
                <input placeholder="email" type="email" onChange={event => this.getAllValues("email", event.target.value)}/><br/>
                <button onClick={this.handleSave}>Submit Details here</button>
            </div>
        )   
    }
}
export default AppContainer;

