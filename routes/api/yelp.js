const router = require('express').Router();
const yelpController = require('../../controllers/yelpController');

router.route('/').get(yelpController.test);

module.exports = router;
