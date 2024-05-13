const Book = require("../models/book");

// Получим всех пользователей из БД
const getBooks = (req, res) => {
  Book.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(404).send(e.message);
      res.status(500).send(e.message);
    });
};

// Получим пользователя по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  Book.findById(book_id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(404).send(e.message);
      res.status(500).send(e.message);
    });
};

// Создаем пользователя
const createBook = (req, res) => {
  const data = req.body;
  Book.create(data, { new: true, runValidators: true })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(404).send(e.message);
      res.status(500).send(e.message);
    });
};

// Обновляем пользователя
const updateBook = (req, res) => {
  const { book_id } = req.params;
  const data = req.body;
  Book.findByIdAndUpdate(book_id, data, { new: true, runValidators: true })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(404).send(e.message);
      res.status(500).send(e.message);
    });
};

// Удаляем пользователя
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndDelete(book_id)
    .then((book) => {
      res.status(200).send("Done");
    })
    .catch((e) => {
      res.status(404).send(e.message);
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
