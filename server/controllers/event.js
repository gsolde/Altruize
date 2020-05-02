const db = require('../models/index');

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
            eventId: req.body.eventId, 
            eventName: req.body.eventName, 
            eventOwnerId: req.body.eventOwnerId, 
            description: req.body.description, 
            startDate: req.body.startDate, 
            finishDate: req.body.finishDate, 
            latitude: req.body.latitude, 
            longitude: req.body.longitude, 
            location: req.body.location, 
            picture: req.body.picture, 
        });
        res.status(201);
        res.json(addedEvent);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

module.exports = {
    getAllEvents, 
    addEvent,
}