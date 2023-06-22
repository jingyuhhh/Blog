const express = require("express");
const app = express();

app.use(express.json());

app.post("/posts", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Connected!");
});
