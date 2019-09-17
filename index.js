var express = require('express');
var app = express();

//Go to root url
app.get('/', function (req, res){
    res.send('Hello World.')
});

app.listen(3000, function (){
    console.log('Example app lstening on port 3000')
});