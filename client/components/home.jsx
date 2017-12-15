import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Utils from "../utils/requests";
import { DEFAULT_BASEPATH } from "../utils/constants.js";
const createTask = DEFAULT_BASEPATH + "/createTask"

class Home extends Component {
    constructor(props) {
        super(props);
        this.object = {};
        this.getAllValues = this.getAllValues.bind(this);
        this.handleTaskSave = this.handleTaskSave.bind(this);
    }

    handleTaskSave() {
        console.log(this.object)
        const isRequired = Utils.fieldValidations(this.refs);
        if (isRequired) {
            alert(isRequired);
            return;
        }
        Utils.sendXmlHttpRequest(createTask, 'POST', this.object, (result, error) => {
            console.log(result)
            if (result && result.success) {
                alert('task saved successfully')
            } else {
                alert('data saved error')
            }
        })
    }

    getAllValues(fieldName, value) {
        this.object[fieldName] = value
    }

    render() {
        return (
            <div>
                <h2>Create new task</h2>
                <table style={{ cellpadding: "10" }}>
                    <tbody>
                        <tr>
                            <th>
                                Title:
                            </th>
                            <th>
                                <input placeholder="Title" ref={"title"} data-required={true} errmsg={"title is required"} onChange={event => this.getAllValues('title', event.target.value)} />
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Description:
                            </th>
                            <th>
                                <textarea placeholder="Describe" ref={"description"} data-required={true} errmsg={"description is required"} onChange={event => this.getAllValues('description', event.target.value)} ></textarea>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                Select Label:
                            </th>
                            <th><select onChange={event => this.getAllValues('label', event.target.value)} ref={"label"} data-required={true} errmsg={"label is required"}>
                                <option value="">--select label--</option>
                                <option value="personal">Personal</option>
                                <option value="work">work</option>
                            </select></th>
                        </tr>
                        <tr>
                            <th>Due Date: </th>
                            <th><input type="date" onChange={event => this.getAllValues('dueDate', new Date(event.target.value))} ref={"dueDate"} data-required={true} errmsg={"due date is required"} /></th>
                        </tr>
                        <tr>
                            <th><button onClick={this.handleTaskSave}>Save Task</button></th>
                            <th><Link to="/taskList">All tasks List</Link></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Home;