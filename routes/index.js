const path = require("path");
const Router = require("express").Router();
const API = require("./api");
const user = require("./user");

Router.use("/api", API);
Router.use("/user", user);

// If no API routes are hit, send the React app
Router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = Router;