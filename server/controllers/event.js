const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function getAllEvents(req, res) {
  try {
    const eventList = await db.Event.findAll({
      include: [{ model: db.User }, { model: db.Org }, { model: db.Tag }],
    });
    res.status(200);
    res.json(eventList);
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
        finish_date: { [Op.gt]: new Date() }, // Op.gt --> operation greater than
      },
      order: [['start_date', 'DESC']],
      include: [{ model: db.User }, { model: db.Org }],
    });
    res.status(200);
    res.json(activeEvents);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

async function getPastEvents(req, res) {
  try {
    const pastEvents = await db.Event.findAll({
      where: {
        finish_date: { [Op.lt]: new Date() }, // Op.lt --> operation less than
      },
      order: [['start_date', 'DESC']],
      include: [{ model: db.User }, { model: db.Org }],
    });
    res.status(200);
    res.json(pastEvents);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

async function getCancelledEvents(req, res) {
  try {
    const cancelledEvents = await db.Event.findAll({
      where: {
        cancelled: true,
      },
      order: [['start_date', 'DESC']],
      include: [{ model: db.User }, { model: db.Org }],
    });
    res.status(200);
    res.json(cancelledEvents);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

async function getEvent(req, res) {
  try {
    const event = await db.Event.findOne({
      where: {
        id: req.body.event_id,
      },
      include: [{ model: db.User }, { model: db.Org }, { model: db.Tag }],
    });
    res.status(200);
    res.json(event);
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

async function addTagToEvent(req, res) {
  try {
    const event = await db.Event.findOne({
      where: {
        id: req.body.event_id,
      },
    });
    const addedTag = await event.addTag(req.body.tag_id);
    res.status(201);
    res.json(addedTag);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function updateEvent(req, res) {
  try {
    const updatedEvent = await db.Event.update(
      {
        event_name: req.body.event_name,
        description: req.body.description,
        start_date: req.body.start_date,
        finish_date: req.body.finish_date,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        location: req.body.location,
        picture: req.body.picture
      },
      { where: { id: req.body.event_id } }
    );
    res.status(201);
    res.json(updatedEvent);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllEvents,
  getEvent,
  addEvent,
  getActiveEvents,
  getPastEvents,
  getCancelledEvents,
  addTagToEvent,
  updateEvent
};