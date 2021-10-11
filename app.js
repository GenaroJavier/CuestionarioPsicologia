var express = require('express');
var bodyParser = require("body-parser");
var readcsv = require('./csvRead');
var calcular = require('./calcular')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set("view engine", "pug");


app.get("/",function(req,res) {
    res.render("index1",{readcsv});
  });

app.post("/cuestionairo",function(req,res) {
    //console.log(req.body);
    calcular(req.body);
    res.send('Data received');
});

app.listen(8080);