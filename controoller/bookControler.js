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

const getABook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateABook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      ruValidators: true,
    });
    if(!book){
      return res.status(404).json(`No such a  book with Id : ${id}`)
    }
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getABook,
  updateABook
};
