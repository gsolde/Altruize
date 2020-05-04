const db = require('../models/index');

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
      tagName: req.body.tagName,
      userId: req.body.userId,
      eventId: req.body.eventId,
      orgId: req.body.orgId,
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
};
