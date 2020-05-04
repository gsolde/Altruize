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
      user_id: req.body.user_id,
      event_id: req.body.event_id,
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

/*TODO ADD:
users going to event
list of events for user (active)


*/
