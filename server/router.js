const router = require('express').Router();
const event = require('./controllers/event');
const user = require('./controllers/user');
const org = require('./controllers/org');
const tag = require('./controllers/tag');
const verifyJWT = require('./middleware/VerifyJWT');

router.get('/events', event.getAllEvents);
router.get('/events/active', event.getActiveEvents);
router.get('/events/past', event.getPastEvents);
router.get('/events/cancelled', event.getCancelledEvents);
router.post('/events', verifyJWT, event.addEvent);
router.post('/events/getEventById', event.getEvent);
router.post('/events/addTagToEvent', event.addTagToEvent);
router.post('/events/addOrgToEvent', event.addOrgToEvent);
router.post('/events/filteredActiveEvents', event.getFilteredActiveEvents);
router.put('/events/updateEvent', event.updateEvent);
router.delete('/events', event.deleteEvent);

router.get('/orgs', org.getAllOrgs);
router.get('/orgs/active', org.getActiveOrgs);
router.post('/orgs', org.addOrg);
router.post('/orgs/getOrgByName', org.getOrg);
router.post('/orgs/getOrgById', verifyJWT, org.getOrgById);
router.post('/orgs/getOrgByLoginId', verifyJWT, org.getOrgByLoginId);
router.post('/orgs/persistantLogin', verifyJWT, org.persistantLogin);
router.post('/orgs/getOrgLogin', org.getOrgLogin);
router.post('/orgs/addTagToOrg', org.addTagToOrg);
router.put('/orgs/updateOrg', org.updateOrg);

router.get('/users/active', user.getActiveUsers);
router.get('/users', user.getAllUsers);
router.post('/users', user.addUser);
router.post('/users/getUserByName', user.getUser);
router.post('/users/getUserById', verifyJWT, user.getUserById);
router.post('/users/getUserByLoginId', verifyJWT, user.getUserByLoginId);
router.post('/users/persistantLogin', verifyJWT, user.persistantLogin);
router.post('/users/getUserLogin', user.getUserLogin);
router.post('/users/addEventToUser', user.addEventToUser);
router.post('/users/deleteEventFromUser', user.deleteEventFromUser);
router.post('/users/addTagToUser', user.addTagToUser);
router.put('/users/updateUser', user.updateUser);

router.get('/tags', tag.getAllTags);
router.post('/tags', tag.addTag);

module.exports = router;
