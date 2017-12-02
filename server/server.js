var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var indexRoutes = require('./routes/restDispatcher');
const mongo = require('./mongo/mongoconfig');
const bodyParser = require('body-parser');         //for getting body in request

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


// //server app
// var port  = 8000;
// app.listen(port, function(){
//     console.log('localhost running:'+ port)
// })

//working of promise

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         resolve('done data response');
//     })
//     reject('promise rejecteddddddddddd')
// })
// if(promise){
//     promise.then((body)=>{
//         console.log('jhjhj', body)
//     }).catch(function(reason){
//         console.log("aaaaa",reason)
//     })
// }

module.exports = app;