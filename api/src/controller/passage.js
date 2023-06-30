import { db, passage } from "./db";

exports.post = function (req, res) {
  passage.insertOne(req.body);
  console.log(passage.find());
};
