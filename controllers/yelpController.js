const axios = require('axios');

// Yelp Controller
module.exports = {
  getResults: (req, res) => {
    const { location, radius, term } = req.body;

    const query = `https://api.yelp.com/v3/businesses/search?location=${location.replace(
      ' ',
      '%20'
    )}&radius=${radius}&categories=restaurants,all&term=${term}`;

    console.log(query);

    // res.send('done');

    axios({
      method: 'GET',
      url: query,
      headers: {
        Authorization: 'bearer ' + process.env.YELP_API_KEY
      }
    })
      .then(results => {
        console.log(results.data);

        function Places(index) {
          this.imageUrl = results.data.businesses[index].image_url;
          this.name = results.data.businesses[index].name;
          this.phone = results.data.businesses[index].phone;
          this.price = results.data.businesses[index].price;
          this.rating = results.data.businesses[index].rating;
          this.location =
            results.data.businesses[index].location.display_address;
        }

        const formattedData = [];

        results.data.businesses.forEach((item, index) =>
          formattedData.push(new Places(index))
        );

        const idk = new Places(0);
        res.send(formattedData);
      })
      .catch(err => console.log(err));
  }
};
