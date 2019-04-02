// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");
// const user = require('./user');

// router.use("/api", apiRoutes);
// router.use("/user", user);

// If no API routes are hit, send the React app
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

// module.exports = router;

const path = require("path");
const router = require("express").Router();
const API = require("./api");
const user = require("./user");

router.use("/api", API);
router.use("/user", user);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;