const express = require("express");
const { createBook, getAllBooks } = require("../controoller/bookControler");

const router = express.Router();

router.post("/book", createBook); // Create book route
router.get("/book", getAllBooks); // gett all books route
// get a book 

module.exports = router;
