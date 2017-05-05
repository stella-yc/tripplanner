const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Hotel = dbConnection.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
			max: 5.0 }
  },
  amenities: {
    type: Sequelize.STRING
  }
});

module.exports = Hotel;

