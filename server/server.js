var path = require('path')
var fs = require('fs')
var express = require('express')
var app = express();

var indexRoutes = require('./routes/index');

//view engine
app.set('view engine', 'html')
app.engine('html', function(path, options, callbacks){
    fs.readFile(path, 'utf-8', callbacks)
});

//middleware
app.use(express.static(path.join(__dirname, '../client') ));

//routes
app.use('/', indexRoutes);

//error
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    if(err){
        console.log("error", err)
    }
})

// //server app
// var port  = 8000;
// app.listen(port, function(){
//     console.log('localhost running:'+ port)
// })
module.exports = app;