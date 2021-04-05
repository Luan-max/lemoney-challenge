require("dotenv").config();
const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
module.exports = {
  host: host,
  dialect: "postgres",
  username: username,
  password: password,
  database: database,
  define: {
    timestamps: true,
    underscore: true,
  },
};
