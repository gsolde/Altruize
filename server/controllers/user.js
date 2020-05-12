const db = require('../models/index');
const jwt = require('jsonwebtoken');

async function getAllUsers (req, res) {
  try {
    const userList = await db.User.findAll({
      include: [{ model: db.Event }, { model: db.Tag }],
    });
    res.status(200);
    res.json(userList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getUser (req, res) {
  try {
    const user = await db.User.findOne({
      where: {
        user_name: req.body.user_name,
      },
      include: [{ model: db.Event }, { model: db.Tag }]
    });
    res.status(200);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getUserById (req, res) {
  try {
    const user = await db.User.findOne({
      where: {
        id: req.user.id,
      },
      include: [
        {
          model: db.Event,
          include: [{ model: db.User }, { model: db.Org }, { model: db.Tag }],
        },
        { model: db.Tag }],
      order: [
        [db.Event, 'start_date', 'ASC']
      ],
    });
    res.status(200);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
async function getUserLogin (req, res) {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.body.user_email,
        password: req.body.user_password,
      }
    });
    if (user === null) {
      res.status(400);
      const err = 'Invalid email or password';
      res.json(err);
    } else {
      const token = jwt.sign({ user }, process.env.TOKEN_SECRET);
      res.status(200);
      res.json(token);
    };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getActiveUsers (req, res) {
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

async function addUser (req, res) {
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

async function updateUser (req, res) {
  try {
    const updatedUser = await db.User.update(
      {
        user_name: req.body.user_name,
        about_me: req.body.about_me,
        email: req.body.email,
        address: req.body.address,
        profile_pic: req.body.profile_pic
      },
      { where: { id: req.body.user_id } }
    );
    res.status(201);
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addEventToUser (req, res) {
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

async function deleteEventFromUser (req, res) {
  try {
    const user = await db.User.findOne({
      where: {
        id: req.body.user_id,
      },
    });
    const deletedEvent = await user.removeEvent(req.body.event_id);
    res.status(201);
    res.json(deletedEvent);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addTagToUser (req, res) {
  try {
    const user = await db.User.findOne({
      where: {
        id: req.body.user_id,
      },
    });
    const addedTag = await user.addTag(req.body.tag_id);
    res.status(201);
    res.json(addedTag);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllUsers,
  getUser,
  getUserById,
  getActiveUsers,
  addUser,
  addEventToUser,
  deleteEventFromUser,
  addTagToUser,
  updateUser,
  getUserLogin
};
