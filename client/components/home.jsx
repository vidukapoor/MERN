import React, { Component } from "react";
import { Link } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.handleTaskSave = this.handleTaskSave.bind(this);
    }
    handleTaskSave() {
        alert('task save done');
    }
    render() {
        return (
            <div>
                <h2>Create new task</h2>
                <input placeholder="Title" /><br /><br />
                <textarea placeholder="Describe"></textarea><br/>
                <button onClick={this.handleTaskSave}>Save Task</button>  
                <Link to="/taskList">go to task List file</Link>
            </div>
        )
    }
}
export default Home;