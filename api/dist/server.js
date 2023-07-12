"use strict";

var _postCotroller = require("./controller/postCotroller");
var _getPost = require("./controller/getPost");
var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.post("/posts", _postCotroller.postController);
app.get("/passage/:id", _getPost.getPost);
app.listen(8888, function () {
  console.log("Connected!");
});