const db = require('../models/index');

async function getAllAttendances(req, res) {
  try {
    const attendanceList = await db.Attendance.findAll({});
    res.status(200);
    res.json(attendanceList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function addAttendance(req, res) {
  try {
    const addedAttendance = await db.Attendance.create({
      userId: req.body.userId,
      eventId: req.body.eventId,
    });
    res.status(201);
    res.json(addedAttendance);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAllAttendances,
  addAttendance,
};
