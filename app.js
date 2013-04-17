/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , routes = require('./routes')
  , pages= require('./routes/pages')
  , http = require('http')
  , path = require('path');

var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}



app.configure(function(){
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))
});



app.get('/', routes.index);
app.get('/page1', pages.news1);
app.get('/page2', pages.news2);
app.get('/page3', pages.news3);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});