const router = require('express').Router();
const event = require('./controllers/event');
const user = require('./controllers/user');
const org = require('./controllers/org');
const tag = require('./controllers/tag');

router.get('/events', event.getAllEvents);
router.get('/events/active', event.getActiveEvents);
router.get('/events/past', event.getPastEvents);
router.get('/events/cancelled', event.getCancelledEvents);
router.post('/events', event.addEvent);

router.get('/orgs/active', org.getActiveOrgs);
router.get('/orgs', org.getAllOrgs);
router.post('/orgs', org.addOrg);

router.get('/users/active', user.getActiveUsers);
router.get('/users', user.getAllUsers);
router.post('/users', user.addUser);
router.post('/users/addEventToUser', user.addEventToUser); // Associate event to a certain user.

router.get('/tags', tag.getAllTags);
router.post('/tags', tag.addTag);

module.exports = router;
