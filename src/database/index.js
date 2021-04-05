const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Adverstiser = require("../models/Adverstiser");
const Offer = require("../models/Offers");

const connection = new Sequelize(dbConfig);

Adverstiser.init(connection);
Offer.init(connection);

Adverstiser.associate(connection.models);
Offer.associate(connection.models);

module.exports = connection;
