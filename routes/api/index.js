const path = require("path");
const router = require("express").Router();
const itemRoutes = require("./item");



// router.use("/api/items", itemRoutes);

// For anything else, render the html page (will show error unless you run build)
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;