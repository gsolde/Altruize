const db = require('../models/index');
const jwt = require('jsonwebtoken');

async function getAllOrgs(req, res) {
  try {
    const orgList = await db.Org.findAll({
      include: [{ model: db.Event }, { model: db.Tag }],
    });
    res.status(200);
    res.json(orgList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getActiveOrgs(req, res) {
  try {
    const activeOrgs = await db.Org.findAll({
      where: {
        active: true,
      },
      order: [['org_name', 'DESC']],
      include: [{ model: db.Event }],
    });
    res.status(200);
    res.json(activeOrgs);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

async function getOrg(req, res) {
  try {
    const org = await db.Org.findOne({
      where: {
        org_name: req.body.org_name,
      },
      include: [{ model: db.Event }, { model: db.Tag }],
    });
    res.status(200);
    res.json(org);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
async function getOrgById(req, res) {
  try {
    const org = await db.Org.findOne({
      where: {
        id: req.user.id,
      },
      include: [{ model: db.Event }, { model: db.Tag }],
    });
    res.status(200);
    res.json(org);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getOrgLogin(req, res) {
  try {
    const org = await db.Org.findOne({
      where: {
        email: req.body.org_email,
        password: req.body.org_password,
      },
    });
    if (org === null) {
      res.status(400);
      const err = 'Invalid email or password';
      res.json(err);
    } else {
      const token = jwt.sign({ user: org }, process.env.TOKEN_SECRET);
      res.status(200);
      res.json(token);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addOrg(req, res) {
  try {
    const addedOrg = await db.Org.create({
      reg_number: req.body.reg_number,
      phone_number: req.body.phoneNumber,
      verified: req.body.verified,
      org_name: req.body.org_name,
      about: req.body.about,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address,
      profile_pic: req.body.profilePic,
      active: req.body.active,
      notes: req.body.notes,
    });
    res.status(201);
    res.json(addedOrg);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addTagToOrg(req, res) {
  try {
    const org = await db.Org.findOne({
      where: {
        id: req.body.org_id,
      },
    });
    const addedTag = await org.addTag(req.body.tag_id);
    res.status(201);
    res.json(addedTag);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function updateOrg(req, res) {
  try {
    const updatedOrg = await db.Org.update(
      {
        reg_number: req.body.reg_number,
        phone_number: req.body.phoneNumber,
        org_name: req.body.org_name,
        about: req.body.about,
        email: req.body.email,
        address: req.body.address,
        profile_pic: req.body.profilePic,
      },
      { where: { id: req.body.org_id }, returning: true }
    );
    res.status(201);
    res.json(updatedOrg);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllOrgs,
  getOrg,
  getOrgById,
  getActiveOrgs,
  addOrg,
  addTagToOrg,
  updateOrg,
  getOrgLogin,
};
