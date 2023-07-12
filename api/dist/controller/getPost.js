"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPost = void 0;
var _db = require("../db");
var getPost = function getPost(req, res) {
  var id = req.params.id;
  console.log(id);
  _db.passage.find({
    title: "b"
  }).toArray(function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: "Error!"
      });
    }
    console.log(data);
    return res.json(data);
  });
};
exports.getPost = getPost;