const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MaintenanceCommentSchema = new Schema({
  body: String
});

// This creates our model from the above schema, using mongoose's model method
const MaintenanceComment = mongoose.model("MaintenanceComment", MaintenanceCommentSchema);

// Export the Note model
module.exports = MaintenanceComment;