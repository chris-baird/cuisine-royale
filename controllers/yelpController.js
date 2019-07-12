const axios = require('axios');

// Yelp Controller
module.exports = {
  getResults: (req, res) => {
    const query =
      'https://api.yelp.com/v3/businesses/search?location=' +
      req.params.location;

    axios({
      method: 'GET',
      url: query,
      headers: {
        Authorization: 'bearer ' + process.env.YELP_API_KEY
      }
    })
      .then(results => {
        res.send(results.data.businesses[0].name);
      })
      .catch(err => console.log(err));
  }
};
