const db = require('../models/index');

async function getAllUsers(req, res) {
  try {
    const UserList = await db.User.findAll({});
    res.status(200);
    res.json(UserList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addUser(req, res) {
  try {
    const addedUser = await db.User.create({
      userId: req.body.userId,
      userName: req.body.userName,
      aboutMe: req.body.aboutMe,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      profilePic: req.body.profilePic,
      active: req.body.active,
      karma: req.body.karma,
      notes: req.body.notes,
    });
    res.status(201);
    res.json(addedUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getActiveUsers(req, res) {
  try {
    const activeUsers = await db.User.findAll({
      where: {
        active: true,
      },
      order: [['userName', 'DESC']],
    });
    res.status(200);
    res.json(activeUsers);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

module.exports = {
  getAllUsers,
  getActiveUsers,
  addUser,
};
