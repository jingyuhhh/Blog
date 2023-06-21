const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("."));
app.post("/posts", (req, res) => {
  console.log(res.body);
});

app.listen(8080);
