const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: Number,
    email : String,
    timeStamp: {type:Date, default:new Date()}
});
module.exports = mongoose.model("user", userSchema);