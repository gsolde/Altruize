const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function getAllTags(req, res) {
  try {
    const tagList = await db.Tag.findAll({
      include: [{ model: db.User }],
    });
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
