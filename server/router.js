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
router.post('/events/getEventById', event.getEvent);
router.post('/events/addTagToEvent', event.addTagToEvent);

router.get('/orgs', org.getAllOrgs);
router.get('/orgs/active', org.getActiveOrgs);
router.post('/orgs', org.addOrg);
router.post('/orgs/getOrgByName', org.getOrg);
router.post('/orgs/addTagToOrg', org.addTagToOrg);

router.get('/users/active', user.getActiveUsers);
router.get('/users', user.getAllUsers);
router.post('/users', user.addUser);
router.post('/users/getUserByName', user.getUser);
router.post('/users/addEventToUser', user.addEventToUser);
router.post('/users/addTagToUser', user.addTagToUser);

router.get('/tags', tag.getAllTags);
router.post('/tags', tag.addTag);

module.exports = router;
