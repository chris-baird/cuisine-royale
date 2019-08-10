const axios = require('axios');

module.exports = {
  getResults: (req, res) => {
    const { location, radius } = req.body;

    const query = `https://api.yelp.com/v3/businesses/search?location=${location}&radius=${radius}&term=food&categories=restaurants,all&open_now=true&limit=50`;

    axios({
      method: 'GET',
      url: query,
      headers: {
        Authorization: 'bearer ' + process.env.YELP_API_KEY
      }
    })
      .then(results => {
        const yelpData = results.data.businesses;
        console.log(yelpData);

        function Places(item) {
          this.id = item.id || null;
          this.imageUrl = item.image_url || null;
          this.url = item.url || null;
          this.name = item.name || null;
          this.phone = item.phone || null;
          this.price = item.price || null;
          this.rating = item.rating || null;
          this.location = item.location || null;
          this.coordinates = item.coordinates || null;
        }

        const formattedData = yelpData.map(item => new Places(item));

        res.json(formattedData);
      })
      .catch(err => console.log(err));
  }
};
