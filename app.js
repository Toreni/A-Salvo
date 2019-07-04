var app = require('express')();
var http = require('http').createServer(app);
let DB = [];

var cors = require('cors');
// Then use it before your routes are set up:
app.use(cors());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/administrador', function(req, res){
  res.sendFile(__dirname + '/administrador.html');
});

app.post('/administrador', function(req, res){
  console.log(req)
  res.send("<H1> NOPE </H1>")
  res.end()
});
