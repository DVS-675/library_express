const User = require("../models/user");

const getUsers = (request, response) => {
  return User.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => response.status(500).send(e.message));
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateUser = (request, response) => {
  const { user_id } = request.params;
  return User.findByIdAndUpdate(user_id, { ...request.body }, { new: true })
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const deleteUser = (request, response) => {
  const { user_id } = request.params;
  return User.findByIdAndDelete(user_id)
    .then((user) => {
      response.status(200).send("Success");
    })
    .catch((e) => response.status(500).send(e.message));
};

const takeBook = (request, response) => {
  const { user_id } = request.params;
  const { book_id } = request.params;
  return User.findByIdAndUpdate(
    user_id,
    { $addToSet: { books: book_id } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      response.status(200).send("Success");
    })
    .catch((e) => response.status(500).send(e.message));
};

const returnBook = (request, response) => {
  const { user_id } = request.params;
  const { book_id } = request.params;
  return User.findByIdAndUpdate(
    user_id,
    { $pullAll: { books: [{ _id: book_id }] } },
    { new: true, runValidators: true }
  )
    .then((user) => {
      response.status(200).send("Success");
    })
    .catch((e) => response.status(500).send(e.message));
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  takeBook,
  returnBook,
};
