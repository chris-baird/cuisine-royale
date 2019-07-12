// Yelp Controller
module.exports = {
  test: (req, res) => {
    console.log(process.env.MESSAGE);
    res.send('Welcome to test');
  }
};
