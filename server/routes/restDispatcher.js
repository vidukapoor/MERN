var path = require('path');
var express = require('express');
var router = express.Router();
const passport = require('passport');
const userHandlers = require("../controller/user_controller");
const taskHandlers = require("../controller/task_controller");
const isLoggedIn = require("../routes/restAuth");

router.get('/', function(req, res){
    console.log("req");
    console.log(res);
    res.sendfile(path.join(__dirname,'../../client/index.html'))
})

router.post('/login', function (req, res) {
    const payload = req.body;
    const response = userHandlers.loginUser(payload, (success)=>{
        res.json(success)
    })
})

/***************************** <start>users dispatchers *********************************/
router.post('/createuser', function(req, res){
    console.log("createuser path hit");
    const body = req.body;
    var response = userHandlers.createuser(body, (success)=>{
        res.json(success)
    });
})

router.get('/getUsers', isLoggedIn, function(req, res){
    var response = userHandlers.getusers((success)=>{
        res.json(success);
    });
})

router.get('/getUsers/:userId', function (req, res) {
    const payload = req.params;
    const response = userHandlers.finduser(payload, (success)=>{
        res.json(success)
    })
})
/***************************** <end>users dispatchers *********************************/

/***************************** <start>task dispatchers *********************************/
router.post('/createTask', isLoggedIn, function(req, res){
    console.log("createTask path hit");
    const body = req.body;
    var response = taskHandlers.createTask(body, (success)=>{
        res.json(success)
    });
})

router.get('/getTasks', isLoggedIn, function(req, res){
    console.log("getTask path hit");
    var response = taskHandlers.getTask((success)=>{
        res.json(success);
    });
})

/***************************** <end>task dispatchers **********************************/
module.exports = router;