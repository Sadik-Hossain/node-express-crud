const users = require("../user.json");

//* get all users
const getAllUsers = (req, res) => {
  const { limit, page } = req.query;
  res.send(users.slice(0, limit));
};
//* random user
const getRandomUser = (req, res) => {
  const string = JSON.stringify(users);
  const parsedUser = JSON.parse(string);

  res.send(parsedUser[Math.floor(Math.random() * parsedUser.length)]);
};
module.exports = {
  getAllUsers,
  getRandomUser,
};
