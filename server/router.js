const router = require('express').Router();
const event = require('./controllers/event');
const user = require('./controllers/user');
const org = require('./controllers/org');
const tag = require('./controllers/tag');

router.get('/events', event.getAllEvents); // OK Organisations not coming through
router.get('/events/active', event.getActiveEvents); // OK Organisations not coming through
router.get('/events/past', event.getPastEvents); // OK Organisations not coming through
router.get('/events/cancelled', event.getCancelledEvents); // OK Organisations not coming through
router.post('/events', event.addEvent); // Ok but not creating connection to org

router.get('/orgs/active', org.getActiveOrgs); //ok
router.get('/orgs', org.getAllOrgs); //ok
router.post('/orgs', org.addOrg); // ok

router.get('/users/active', user.getActiveUsers); //ok
router.get('/users', user.getAllUsers); //ok
router.post('/users', user.addUser); //ok
router.post('/users/addEvent', user.addEvent);

router.get('/tags', tag.getAllTags); // ok
router.post('/tags', tag.addTag); // ok

module.exports = router;
