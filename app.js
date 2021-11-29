var express = require('express');
var bodyParser = require("body-parser");
var readcsv = require('./csvRead');
var calcular = require('./calcular')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static('public'));
app.use("/public",express.static('public'));
app.set("view engine", "pug");


app.get("/",function(req,res) {
    res.render("index");
  });

app.get("/cuestionario",function(req,res) {
    //console.log(req.body);
    res.render("cuestionario",{readcsv});
});

app.post("/resultados",function(req,res) {
  //console.log(req.body);
  var resul = calcular(req.body);
  res.render("resultados",{resultado:resul})
});
app.listen(8080);