const express = require("express");
const userController = require("../controllers/UserController");

const router = express.Router();
//* get all user
router.route("/all").get(userController.getAllUsers);
//* random user
router.route("/random").get(userController.getRandomUser);
//* save user
router.route("/save").post(userController.saveAUser);
//* delete user
router.route("/delete").delete(userController.deleteAUser);
//* update user
router.route("/update").patch(userController.updateAUser);
module.exports = router;
