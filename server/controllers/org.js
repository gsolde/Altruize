const db = require('../models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function getAllOrgs (req, res) {
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

async function getActiveOrgs (req, res) {
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

async function getOrg (req, res) {
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
async function getOrgById (req, res) {
  try {
    const org = await db.Org.findOne({
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
    res.json(org);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getOrgByLoginId (req, res) {
  try {
    const org = await db.Org.findOne({ where: { id: req.user.id } });
    res.status(200);
    res.json(org);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function persistantLogin (req, res) {
  try {
    const org = await db.Org.findOne({
      where: {
        email: req.user.email,
        password: req.user.password,
      }
    });
    if (org === null) return res.status(400).json(org);
    else {
      res.status(200);
      res.json(org);
    };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getOrgLogin (req, res) {
  try {
    const org = await db.Org.findOne({
      where: {
        email: req.body.org_email
      }
    });
    if (org === null) res.status(400).json('Invalid email');
    else {
      const validPassword = await bcrypt.compare(req.body.org_password, org.password);
      if (!validPassword) return res.status(403).json('Invalid password');
      const token = jwt.sign({ user: org }, process.env.TOKEN_SECRET);
      res.status(200);
      res.json(token);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addOrg (req, res) {
  try {
    const {
      reg_number,
      phone_number,
      verified,
      org_name,
      about,
      email,
      password,
      address,
      profile_pic,
      active,
      notes } = req.body;
    const org = await db.Org.findOne({ where: { org_name } });
    const checkEmail = await db.Org.findOne({ where: { email } });
    if (org) res.status(403).json('Organisation already exists');
    else if (checkEmail) res.status(409).json('Email already in use');
    else {
      const saltRounds = 10;
      const hash = await bcrypt.hash(password, saltRounds);
      const addedOrg = await db.Org.create({
        password: hash,
        reg_number,
        phone_number,
        verified,
        org_name,
        about,
        email,
        address,
        profile_pic,
        active,
        notes,
      });
      res.status(201);
      res.json(addedOrg);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addTagToOrg (req, res) {
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

async function updateOrg (req, res) {
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
  getOrgByLoginId,
  persistantLogin
};
