const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOriginalUrl = require("./middleware/loggerOriginalUrl");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/mydb",
} = process.env;

const handleError = (error) => {
  console.log(error.message);
};

mongoose.connect(MONGO_URL).catch((error) => handleError(error));
const app = express();

app.use(cors());
app.use(loggerOriginalUrl);
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
