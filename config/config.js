require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = {
  develop: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    logging: false,
    pool: {
      max: 50,
      min: 0,
      acquire: 900000,
      idle: 900000,
    },
    retry: {
      match: [
        Sequelize.ConnectionError,
        Sequelize.ConnectionTimedOutError,
        Sequelize.TimeoutError,
      ],
      max: 5,
    },
  },  
};
