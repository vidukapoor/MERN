import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { DEFAULT_BASEPATH } from "../utils/constants.js";
import Utils from "../utils/requests";
const getAllTask = DEFAULT_BASEPATH + "/getTasks";
const deleteTask = DEFAULT_BASEPATH + "/deleteTask";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = { taskList: [] }
        this.handleAction = this.handleAction.bind(this);
        return this;
    }

    componentWillMount() {
        const resp = this.getAllTaskData();
        return resp;
    }

    getAllTaskData() {
        Utils.sendXmlHttpRequest(getAllTask, 'GET', null, (result, error) => {
            if (result && result.success) {
                this.setState({ taskList: result.result })
            } else {
                alert('error in getting list')
            }
        })
    }

    handleAction(id) {
        const _this = this;
        if (!confirm("sure want to delete the record"))
            return;
        Utils.sendXmlHttpRequest(deleteTask, 'POST', { taskId: id }, (result, error) => {
            if (result && result.success) {
                _this.getAllTaskData();
            } else {
                alert('error in deleting list')
            }
        })
    }

    dateFormatter(date) {
        console.log(date)
        if(!date)
            return "----";
        var objDate = new Date(date);
        var dd = objDate.getDate();
        var mm = objDate.getMonth() + 1; //January is 0!

        var yyyy = objDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return dd + '/' + mm + '/' + yyyy;;
    }

    render() {
        const _this = this;
        const { taskList } = this.state;
        console.log("taskList", taskList)
        return (
            <div>
                <h2>All Task List</h2>
                <Link to="/home"><button>Add Task</button></Link>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>status</th>
                            <th>Label</th>
                            <th>Due Date</th>
                            <th>Action</th>
                        </tr>
                        {taskList.map(function (task, id) {
                            return (
                                <tr key={id}>
                                    <td><center>{id + 1}</center></td>
                                    <td><center>{task.title}</center></td>
                                    <td><center>{task.description}</center></td>
                                    <td><center>{task.status}</center></td>
                                    <td><center>{task.label}</center></td>
                                    <td><center>{_this.dateFormatter(task.dueDate)}</center></td>
                                    <td><center>
                                        <button onClick={event => _this.handleAction(task._id)}>Delete</button>
                                        </center>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TaskList;