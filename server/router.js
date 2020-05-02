const router = require('express').Router();
const event = require('./controllers/event');
// const user = require('./controllers/user');
// const org = require('./controllers/org');

// interactions with db

// router.get('/', (req, res) => res.send('This is working!'));
router.get('/events', event.getAllEvents);
router.post('/events', event.addEvent);

// router.get('/ratings', rating.getAllRatings);
// router.get('/ratings/:username', rating.getRatedSongsByUser);
// router.post('/ratings', rating.insertOrUpdateRating);

module.exports = router;
