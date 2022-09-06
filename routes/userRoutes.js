const express = require("express");
const userController = require("../controllers/UserController");

const router = express.Router();

router.route("/all").get(userController.getAllUsers);

module.exports = router;
