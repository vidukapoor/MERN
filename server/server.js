var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var indexRoutes = require('./routes/restDispatcher');
const mongo = require('./mongo/mongoconfig');
const bodyParser = require('body-parser');                      //for getting body in request
const user = require('../server/models/user_model');

app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded   always call before route
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//view engine
app.set('view engine', 'html')
app.engine('html', function(path, options, callbacks){
    fs.readFile(path, 'utf-8', callbacks)
});

//middleware
app.use(express.static(path.join(__dirname, '../client') ));

//routes
app.use('/', indexRoutes);

//usage with the fix of refresh issue accepts all the routes
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/index.html'))
});

//error
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    if(err){
        console.log("error in startup", err)
        res.json({success:false, result:err})
    }
})

passport.use('local-user', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, user.authenticate()));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
  
module.exports = app;