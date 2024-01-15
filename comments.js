// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Use static file server from public/ directory
app.use(express.static(path.join(__dirname, 'public')));

// GET /comments
// Returns all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// POST /comments
// Creates a new comment
app.post('/comments', function(req, res) {
  var newComment = {
  }
});