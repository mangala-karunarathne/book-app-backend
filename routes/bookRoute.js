const express = require("express");

const router = express.Router();

router.post("/book", createBook);

module.exports = router;
