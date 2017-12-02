import React, {Component} from "react";
import Utils from "../utils/requests"
const createuser = "http://localhost:8000/createuser"

class CreateUser extends Component{
    constructor(props){
        super(props);
        this.object = {}
        this.handleSave = this.handleSave.bind(this);
        this.getAllValues = this.getAllValues.bind(this);
        return this;
    }

    handleSave (){
        const isRequired = Utils.fieldValidations(this.refs);
        if(isRequired){
            alert(isRequired);
            return;
        }
        console.log(this.object)
        Utils.sendXmlHttpRequest(createuser, 'POST', this.object, (result, error) =>{
            console.log(result)
            if(result && result.success){
                alert('data saved successfully Goto login')
            }else{
                alert('data saved error')
            }
        })
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
                <input placeholder="email" type="email" ref={"email"} data-required={true} errmsg={"email is required"} onChange={event => this.getAllValues("email", event.target.value)}/><br/>
                <input placeholder="password" type="password" ref={"password"} data-required={true} errmsg={"password is required"} onChange={event => this.getAllValues("password", event.target.value)}/><br/>
                <button onClick={this.handleSave}>Create User</button>
            </div>
        )   
    }
}
export default CreateUser;
