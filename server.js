const path = require('path');
const bodyParser = require('body-parser');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const isDevelopment = process.env.NODE_ENV !== 'production';
var ObjectId = require('mongodb').ObjectID;
const mongo = require('mongodb').MongoClient;
// const dbUrl = 'mongodb://localhost:27017/work-share';
// const dbName = 'work-share';

// Live MongoDb config
const dbUrl = 'mongodb://joel:joel@ds251988.mlab.com:51988/work-share';
const dbName = 'work-share';

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');
var port = process.env.PORT || 3000;
var app = express();
var DIST_DIR = path.join(__dirname, 'dist');
var CLIENT_DIR = path.join(__dirname, 'src');
var dir;
var db;
var compiler;

// This line uses express inbuilt http server.
app.listen(port, function () {
  console.log('server listening...');
});

if (isDevelopment) {
  dir = CLIENT_DIR;
  // config.entry.push('webpack-hot-middleware/client');
  compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler));
  // app.use(webpackHotMiddleware(compiler));
  console.log('Development Environment...');
} else {
  dir = DIST_DIR;
  console.log('Serving production site...');
  app.use(express.static(dir));
}

app.use(bodyParser.json());  // else req.body is undefined cause body-parser is separated from express from v4.0

// mongo connect
mongo.connect(dbUrl, function (err, database) {
  if (err) {
    throw err;
  }
  db = database.db(dbName);
  console.log('Connected successfully to work-share database');

  app.post('/posts', function (req, res) {
    console.log('connecting to /posts');
    // db.collection('posts').find({}).toArray(function (err, result) {
    //   if (result.length !== 0) {
    //     res.json({ 'posts': result });
    //     console.log('yup');
    //   }
    //   if (err) {
    //     throw err;
    //   }
    // });
  });

  app.post('/posts/:post_id', function (req, res) {
    console.log('connecting to /posts/post_id');
    // db.collection('posts').findOne({'_id': ObjectId(req.params.post_id)}, function (err, result) {
    //   if (result.length !== 0) {
    //     res.json({ 'post': result });
    //   }
    //   if (err) {
    //     throw err;
    //   }
    // });
  });

  app.post('/register', function (req, res) {
    console.log('connecting to /register');
  });

  app.get('*', function (req, res) {
    console.log(dir);
    res.sendFile(dir + '/index.html');
  });
});
