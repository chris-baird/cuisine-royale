const path = require('path');
const router = require('express').Router();
const yelpRoutes = require('./yelp');

// Yelp Routes
router.use('/yelp', yelpRoutes);

// For anything else, render the html page
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
