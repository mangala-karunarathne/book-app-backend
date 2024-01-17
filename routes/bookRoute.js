const express = require("express");
const { createBook, getAllBooks, getABook } = require("../controoller/bookControler");

const router = express.Router();

router.post("/book", createBook); // Create book route
router.get("/book", getAllBooks); // gett all books route
router.get("/book/:id", getABook); // get a single book
router.put("/book/:id", updateABook); // edit a single book

module.exports = router;
