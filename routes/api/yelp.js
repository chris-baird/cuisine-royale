const router = require('express').Router();
const yelpController = require('../../controllers/yelpController');

router.route('/:location').get(yelpController.getResults);

module.exports = router;
