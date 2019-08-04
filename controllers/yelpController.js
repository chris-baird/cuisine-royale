const axios = require('axios');

// Yelp Controller
module.exports = {
  getResults: (req, res) => {
    const { latitude, longitude, radius, term } = req.body;

    const query = `https://api.yelp.com/v3/businesses/search?longitude=${longitude}&latitude=${latitude}&radius=${radius}&categories=restaurants,all&term=${term}&open_now=true&limit=50`;

    axios({
      method: 'GET',
      url: query,
      headers: {
        Authorization: 'bearer ' + process.env.YELP_API_KEY
      }
    })
      .then(results => {
        const yelpData = results.data.businesses;

        function Places(item) {
          this.imageUrl = item.image_url || null;
          this.name = item.name || null;
          this.phone = item.phone || null;
          this.price = item.price || null;
          this.rating = item.rating || null;
          this.location = item.location || null;
        }

        const formattedData = yelpData.map(item => new Places(item));

        res.send(formattedData);
      })
      .catch(err => console.log(err));
  }
};
