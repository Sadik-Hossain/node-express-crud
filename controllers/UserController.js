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

//* save a user
const saveAUser = (req, res) => {
  if (
    req.body.id == undefined ||
    req.body.gender == undefined ||
    req.body.name == undefined ||
    req.body.contact == undefined ||
    req.body.address == undefined ||
    req.body.photoUrl == undefined
  ) {
    res.send("A value is missing");
  } else {
    users.push(req.body);
    res.send("Data has been saved");
  }
};
module.exports = {
  getAllUsers,
  getRandomUser,
  saveAUser,
};
