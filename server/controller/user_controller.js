var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
const userModel = require('../models/user_model');

class UserHandlers {
    constructor() {
        passport.use(userModel.createStrategy());
        passport.serializeUser(userModel.serializeUser());
        passport.deserializeUser(userModel.deserializeUser());
        this.self = this;
    }

    createuser(dataTosave, cb) {
        const {email, password} = dataTosave;
        console.log("email", email);
        console.log("password", password);
        var newUser = userModel(dataTosave);
        try {
            console.log('creting user');            
            userModel.register(newUser, password, (err, res) => {
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

    getusers(cb) {
        try {
            userModel.find((err, res) => {
                cb({ success: true, result: res });
            });
        } catch (e) {
            cb({ success: false, result: e.message });
        }
    }

    finduser(payload, cb) {
        const userId = payload.userId;
        try {
            userModel.findOne({ _id: userId }, (err, res) => {
                if (res)
                    cb({ success: true, result: res })
                else
                    cb({ success: false, result: "Invalid user" })
            })
        } catch (e) {
            cb({ success: false, result: e.message })
        }
    }

    loginUser(payload, cb) {
        console.log("login", payload);
        const { email, password } = payload;
        var authenticate = userModel.authenticate();
        authenticate(email, password, function (err, result) {
            if (err) {
                console.log('error', err);
                cb({ success: false, result: err });
            } else if (!result) {
                console.log('result', result);
                cb({ success: false, result: result });
            } else {
                cb({ success: true, result: result });
            }
        });
    }
}
const userHandlers = new UserHandlers();
module.exports = userHandlers;

//lean(); use for the finding of the like fetch is 
// const abc = await userModel.find().count().lean().exec();