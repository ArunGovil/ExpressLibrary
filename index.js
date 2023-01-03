const express = require("express");
const app = express();
const port = 3000;
const data = require("./data/data.json");

app.use("/", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/library", require("./routes/books"));

app.listen(port, () => {});

module.exports = app;
