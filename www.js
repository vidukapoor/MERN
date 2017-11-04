var app = require('./server/server')
//server app
var port  = 8000;
app.listen(port, function(){
    console.log('localhost running:'+ port)
})

//run commands
//npm run webpack
//node www