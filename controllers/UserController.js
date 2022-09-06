const users = require("../user.json");

const getAllUsers = (req, res) => {
  const { limit, page } = req.query;
  res.send(users.slice(0, limit));
};

module.exports = {
  getAllUsers,
};
