"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passage = exports.db = void 0;
var _mongodb = require("mongodb");
var uri = "mongodb://localhost:27017";
var client = new _mongodb.MongoClient(uri, {
  useUnifiedTopology: true
}, {
  useNewUrlParser: true
}, {
  connectTimeoutMS: 30000
}, {
  keepAlive: 1
});
client.connect();
var db = client.db("blog");
exports.db = db;
var passage = db.collection("passage");
exports.passage = passage;