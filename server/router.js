const router = require('express').Router();
const event = require('./controllers/event');
const user = require('./controllers/user');
const org = require('./controllers/org');

// interactions with db

router.get('/events', event.getAllEvents);
router.get('/events/active', event.getActiveEvents);
router.post('/events', event.addEvent);

router.get('/users/active', org.getActiveOrgs);
router.get('/orgs', org.getAllOrgs);
router.post('/orgs', org.addOrg);

router.get('/users/active', user.getActiveUsers);
router.get('/users', user.getAllUsers);
router.post('/users', user.addUser);

module.exports = router;
