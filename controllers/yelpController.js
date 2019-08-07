const axios = require('axios');

module.exports = {
  getResults: (req, res) => {
    console.log(
      '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
    );
    const { latitude, longitude, radius, term = 'food' } = req.body;
    console.log(req.body);

    console.log(typeof latitude);
    console.log(typeof longitude);
    console.log(typeof radius);

    console.log(
      '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
    );

    const query = `https://api.yelp.com/v3/businesses/search?longitude=${longitude}&latitude=${latitude}&radius=${Math.floor(
      radius
    )}&categories=restaurants,all&term=${term}&open_now=true&limit=50`;

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
          this.id = item.id || null;
          this.imageUrl = item.image_url || null;
          this.name = item.name || null;
          this.phone = item.phone || null;
          this.price = item.price || null;
          this.rating = item.rating || null;
          this.location = item.location || null;
        }

        const formattedData = yelpData.map(item => new Places(item));

        res.json(formattedData);
      })
      .catch(err => console.log(err));
  }
};
