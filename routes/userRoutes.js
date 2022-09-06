const express = require("express");
const userController = require("../controllers/UserController");

const router = express.Router();
//* get all user
router.route("/all").get(userController.getAllUsers);
//* random user
router.route("/random").get(userController.getRandomUser);

module.exports = router;
