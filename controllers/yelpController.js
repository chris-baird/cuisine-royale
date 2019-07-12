// Yelp Controller
module.exports = {
  test: (req, res) => {
    res.send(process.env.MESSAGE);
  }
};
