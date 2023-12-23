const express = require("express");
const { createBook } = require("../controoller/bookControler");

const router = express.Router();

router.post("/book", createBook);

module.exports = router;
