const express = require("express");
const app = express();
const port = 3000;
const data = require("./data/data.json");

app.use("/", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/all", function (req, res) {
  res.json(data);
});

app.get("/book/:id", function (req, res) {
  const item = data.find((item) => (item.id = req.params.id));
  res.json({ item });
});

app.listen(port, () => {});

module.exports = app;
