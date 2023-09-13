const router = require("express").Router();
const loggerTwo = require("../middleware/loggerTwo");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  takeBook,
  returnBook,
} = require("../controllers/users");

router.use(loggerTwo);

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users/", createUser);
router.patch("/users/:user_id", updateUser);
router.delete("/users/:user_id", deleteUser);
router.post("/users/:user_id/:book_id", takeBook);
router.delete("/users/:user_id/:book_id", returnBook);

module.exports = router;
