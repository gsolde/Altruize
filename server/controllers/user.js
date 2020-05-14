const db = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
      include: [{ model: db.Event }, { model: db.Tag }],
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
          where: {
            cancelled: false,
          },
          include: [{ model: db.User }, { model: db.Org }, { model: db.Tag }],
        },
        { model: db.Tag }],
      order: [
        [db.Event, 'start_date', 'ASC']
      ],
      order: [[db.Event, 'start_date', 'ASC']],
    });
    res.status(200);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getUserByLoginId (req, res) {
  try {
    const user = await db.User.findOne({ where: { email: req.user.email } });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function persistantLogin (req, res) {
  try {
    const user = await db.User.findOne({
      where: {
        email: req.user.email,
        password: req.user.password,
      }
    });
    if (user === null) return res.status(400).json(user);
    else {
      res.status(200);
      res.json(user);
    };
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
      }
    });
    if (user === null) return res.status(400).json('Invalid email');
    else {
      const validPassword = await bcrypt.compare(req.body.user_password, user.password);
      if (!validPassword) return res.status(403).json('Invalid password');
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
    const {
      password,
      user_name,
      about_me,
      email,
      address,
      profile_pic,
      active,
      karma,
      notes,
    } = req.body;
    const user = await db.User.findOne({ where: { user_name } });
    const checkEmail = await db.User.findOne({ where: { email } });
    if (user) res.status(403).json('User already exists');
    else if (checkEmail) res.status(409).json('Email already in use');
    else {
      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);
      const newUser = await db.User.create({
        password: hash,
        user_name,
        about_me,
        email,
        address,
        profile_pic,
        active,
        karma,
        notes,
      });
      res.status(201);
      res.json(newUser);
    }
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
        profile_pic: req.body.profile_pic,
      },
      { where: { id: req.body.user_id }, returning: true }
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
  getUserLogin,
  getUserByLoginId,
  persistantLogin
};
