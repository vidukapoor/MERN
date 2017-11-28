const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: String,
    title: { type: String, required: true },
    description: { type: String, required: true },
    status:{type: String, enum: ['pending', 'onProgress', 'done'], default:"pending"},
    timeStamp: {type:Date, default:new Date()}
});
module.exports = mongoose.model("tasks", taskSchema);