const Book = require("../models/book");

const err = "Книга не найдена или был запрошен несуществующий роут";

// Получим список всех книг из БД
const getBooks = (req, res) => {
  Book.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.send(e.message);
      // res.status(500).send(e.message);
    });
};

// Получим данные книги по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  Book.findById(book_id)
    .then((book) => {
      if (!book) {
        throw new Error(err);
      }
      res.status(200).send(book);
    })
    .catch((e) => {
      if (e.message === err) {
        res.status(404).send(e.message);
        return;
      }
      res.status(500).send(e.message);
    });
};

// Создаем данные книги
const createBook = (req, res) => {
  const data = req.body;
  Book.create(data, { new: true, runValidators: true })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Обновляем данные книги по ID
const updateBook = (req, res) => {
  const { book_id } = req.params;
  const data = req.body;
  Book.findByIdAndUpdate(book_id, data, { new: true, runValidators: true })
    .then((book) => {
      if (!book) {
        throw new Error(err);
      }
      res.status(200).send(book);
    })
    .catch((e) => {
      if (e.message === err) {
        res.status(404).send(e.message);
        return;
      }
      res.status(500).send(e.message);
    });
};

// Удаляем данные книги по ID
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        throw new Error(err);
      }
      res.status(200).send("Done");
    })
    .catch((e) => {
      if (e.message === err) {
        res.status(404).send(e.message);
        return;
      }
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
