const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/books", async (req, res, next) => {
  try {
    const books = await prisma.book.findMany({});
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.get("/books/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(book);
  } catch (error) {
    next(error);
  }
});

router.post("/books", async (req, res, next) => {
  try {
    const books = await prisma.book.create({
      data: req.body,
    });
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.delete("/books/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await prisma.book.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deletedBook);
  } catch (error) {
    next(error);
  }
});

router.patch("/books/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.update({
      where: {
        id: Number(id),
      },
      data: req.body,
      include: {
        author: true,
      },
    });
    res.json(book);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
