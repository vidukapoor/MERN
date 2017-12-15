const taskModel = require('../models/task_model');

class TaskHandlers {
    constructor() {
        this.self = this;
    }

    createTask(dataTosave, cb) {
        var newTask = taskModel(dataTosave);
        try {            
            newTask.save((err, res) => {
                if (err) {
                    cb({ success: false, result: err });
                } else if (res && cb) {
                    cb({ success: true, result: res._id });
                }
            });
        } catch (e) {
            cb({ success: false, result: e.message });
        }
    }

    getTask(cb) {
        try {
            taskModel.find((err, res) => {
                cb({ success: true, result: res });
            });
        } catch (e) {
            cb({ success: false, result: e.message });
        }
    }

    deleteTask(payload, cb) {
        const taskId = payload.taskId;
        try {
            taskModel.remove({ _id: taskId },(err, res) => {
                cb({ success: true, result: res });
            });
        } catch (e) {
            cb({ success: false, result: e.message });
        }
    }

}
const taskHandlers = new TaskHandlers();
module.exports = taskHandlers;