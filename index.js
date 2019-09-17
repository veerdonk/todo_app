var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var tasks = [];
var complete = [];
//Go to root url
app.get('/', function (req, res){
    res.render('index', {tasks: tasks, complete: complete});
});

app.listen(3000, function (){
    console.log('Example app lstening on port 3000')
});

app.post('/addtask', function(req, res){
    var newTask = req.body.newTask;
    tasks.push(newTask);
    res.redirect('/');
});

app.post('/removetask', function(req, res){
    var taskToRemove = req.body.check;
    
    if(typeof taskToRemove === "string"){
        complete.push(taskToRemove);
        tasks.splice(tasks.indexOf(taskToRemove), 1);
    }else if(typeof taskToRemove === "object"){
        for(var i = 0; i < taskToRemove.length; i++){
            complete.push(taskToRemove[i]);
            tasks.splice(tasks.indexOf(taskToRemove[i]), 1);
        }
    }
    res.redirect('/');
});