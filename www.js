var app = require('./server/server')
//server app

const argsPort = process.argv.slice(2);
var port  = argsPort[0] || 8000;

app.listen(port, function(){
    console.log('localhost running:'+ port+' is '+ new Date())
    console.log('url', 'http://localhost:'+port)
});             