const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: Number,
    email : {type:String, unique: true},
    password: { type: String , required:true},
    timeStamp: {type:Date, default:new Date()}
});
const options ={
  usernameField: 'email',
  passwordField: 'password',
  usernameLowerCase: true,
  selectFields: 'firstName email',
}
userSchema.plugin(passportLocalMongoose, options);

module.exports = mongoose.model("user", userSchema);