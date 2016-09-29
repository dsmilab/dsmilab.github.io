var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/cv.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/cv.html'));
});

app.get('/research.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/research.html'));
});

app.get('/projects.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/projects.html'));
});

app.get('/publications.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/publications.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
