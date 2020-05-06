const db = require('../models/index');

async function getAllOrgs(req, res) {
  try {
    const orgList = await db.Org.findAll({});
    res.status(200);
    res.json(orgList);
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

module.exports = {
  getAllOrgs,
  getActiveOrgs,
  addOrg,
};
