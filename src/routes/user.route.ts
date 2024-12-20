let router = require("express").Router();
const usersController = require("../controllers/user.controller");

router.get("/", usersController.getAllUsers);

module.exports = router;
