var path = require('path');
var express = require('express');
var router = express.Router()
router.get('/', function(req, res){
    res.sendfile(path.join(__dirname,'../../client/index.html'))
})
module.exports = router
// app.get('/', function(req, res){
//     res.sendfile(path.join(__dirname,'index.html'))
// })