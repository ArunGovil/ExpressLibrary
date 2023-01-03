const router = require("express").Router();

router.get("/books", async (req, res, next) => {
  res.send({ message: "Welcome to Book API" });
});

router.get("/books/:id", async (req, res, next) => {
  res.send({ message: "Welcome to Book API" });
});

router.post("/books", async (req, res, next) => {
  res.send({ message: "Welcome to Book API" });
});

router.delete("/books/:id", async (req, res, next) => {
  res.send({ message: "Welcome to Book API" });
});

module.exports = router;
