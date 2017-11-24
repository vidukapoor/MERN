var path = require('path');
var express = require('express');
var router = express.Router();
const userHandlers = require("../controller/user.controller")

router.get('/', function(req, res){
    console.log("req");
    console.log(res);
    res.sendfile(path.join(__dirname,'../../client/index.html'))
})

router.get('/bird', function (req, res) {
    res.send('Birds home page to display');
})

router.post('/createuser', function(req, res){
    console.log("req.body", req.body);
    const body = req.body;
    var response = userHandlers.createuser(body, (success)=>{
        console.log('success', success);
        res.json(success)
    });
})

router.get('/getusers', function(req, res){
    var response = userHandlers.getuser((success)=>{
        res.json(success);
    });
})
module.exports = router;