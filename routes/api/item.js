const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/")
  .get(itemController.findAll)
  .post(itemController.create);

router.route("/:id")
  .get(bookController.findByID)
  .put(itemController.update)
  .delete(bookController.delete);

module.exports = router;