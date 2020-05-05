const db = require('../models/index');

const user = require('./user');

async function getAllTags(req, res) {
  try {
    const tagList = await db.Tag.findAll({});
    res.status(200);
    res.json(tagList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addTag(req, res) {
  try {
    const addedTag = await db.Tag.create({
      tag_name: req.body.tag_name,
      user_id: req.body.user_id,
      event_id: req.body.event_id,
      org_id: req.body.org_id,
    });
    res.status(201);
    res.json(addedTag);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllTags,
  addTag,
  usersByTag,
};

// Queries
// tags for user
// users for tag
// tags for event
// events for tag
// tags for Orgs
// orgs for tag
