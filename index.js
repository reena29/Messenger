

var app1 = require('express')();
var http = require('http').Server(app1);
var io = require('socket.io')(http);

app1.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
    
});

io.on('connection', function(socket){
 socket.on('chat message', function(msg){
  io.emit('chat message', msg);
 });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});