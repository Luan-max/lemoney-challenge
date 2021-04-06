require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const dialect = process.env.DB_DIALECT;
module.exports = {
  host: host,
  dialect: dialect || "postgres",
  username: username,
  password: password,
  database: database,
  storage: "./__tests__/database.sqlite",
  define: {
    timestamps: true,
    underscore: true,
  },
};
