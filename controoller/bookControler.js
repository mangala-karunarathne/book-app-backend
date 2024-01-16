const Book = require("../models/bookModel");

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
};
