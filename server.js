var express = require("express");
var mysql = require("mysql");
var path = require("path");

var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "fortnite123",
  database: "survey_db"
});

app.get("/", function(req, res) {
  res.sendfile("app/public/home.html");
});

app.get("/survey", function(req, res) {
  res.sendFile("survey.html", {root: path.join(__dirname, "app/" + "public")});
});

app.listen(PORT, function() {
  //console.log("Listening for " + PORT);
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

var questions = [{
  question: "Donald Trump is the president of the United States of America",
  answerChoices: ["1 Strongly Disagree", "2", "3 Neutral", "4", "5 Strongly Agree"]
}, {
  question: "Your favorite color is blue",
  answerChoices: ["1 Strongly Disagree", "2", "3 Neutral", "4", "5 Strongly Agree"]
}];

