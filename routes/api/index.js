const path = require('path');
const router = require('express').Router();
const yelpRoutes = require('./yelp');

router.use('/yelp', yelpRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
