const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function getAllEvents(req, res) {
  try {
    const eventList = await db.Event.findAll({});
    res.status(200);
    res.json(eventList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addEvent(req, res) {
  try {
    const addedEvent = await db.Event.create({
      event_name: req.body.event_name,
      description: req.body.description,
      start_date: req.body.start_date,
      finish_date: req.body.finish_date,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      location: req.body.location,
      picture: req.body.picture,
      cancelled: req.body.cancelled,
    });
    res.status(201);
    res.json(addedEvent);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getActiveEvents(req, res) {
  try {
    const activeEvents = await db.Event.findAll({
      where: {
        cancelled: false,
        start_date: { [Op.gt]: new Date() },
      },
      order: [['start_date', 'DESC']],
      include: [{ model: db.User }],
    });
    res.status(200);
    res.json(activeEvents);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

module.exports = {
  getAllEvents,
  addEvent,
  getActiveEvents,
};
