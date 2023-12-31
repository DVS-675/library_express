const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const noRoute = require("./middleware/noRoute");
const loggerTwo = require("./middleware/loggerTwo");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => handleError(error));

const app = express();

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World");
};

app.use(cors());

app.use(bodyParser.json());

app.get("/", helloWorld);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello POST");
});

app.use(userRouter);
app.use(bookRouter);
app.use(noRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
