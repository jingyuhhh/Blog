import { postController } from "./controller/postCotroller";
import { getPost } from "./controller/getPost";
const express = require("express");
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/posts", postController);
app.get("/passage/:id", getPost);

app.listen(8888, () => {
  console.log("Connected!");
});
