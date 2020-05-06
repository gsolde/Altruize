const db = require('../models/index');

async function getAllUsers(req, res) {
  try {
    const UserList = await db.User.findAll({
      include: [{ model: db.Event }],
    });
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
      user_name: req.body.user_name,
      about_me: req.body.about_me,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      profile_pic: req.body.profile_pic,
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
      include: [{ model: db.Event }],
    });
    res.status(200);
    res.json(activeUsers);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

async function addEvent(req, res) {
  try {
    const user = await db.User.findOne({
      where: {
        id: req.body.user_id,
      },
    });
    const addedEvent = await user.addEvent(req.body.event_id);
    res.status(201);
    res.json(addedEvent);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllUsers,
  getActiveUsers,
  addUser,
  addEvent,
};
