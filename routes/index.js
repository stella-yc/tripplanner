const router = require('express').Router();
const models = require('../models');
const Hotel = models.Hotel;
const Restaurant = models.Restaurant;
const Activity = models.Activity;

router.get('/', function (req, res, next) {
  var hotelData = Hotel.findAll();

  var restaurantData = Restaurant.findAll();

  var activityData = Activity.findAll();

  Promise.all([hotelData, restaurantData, activityData])
    .then(function (values) {
      var hot = values[0];
      var rest = values[1];
      var act = values[2];
      res.render('index', {hotels: hot, activities: act, restaurants: rest});
    })
    .catch(next);

});

module.exports = router;
