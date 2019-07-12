const router = require('express').Router();
const yelpController = require('../../controllers/yelpController');

router.route('/').post(yelpController.getResults);

module.exports = router;
