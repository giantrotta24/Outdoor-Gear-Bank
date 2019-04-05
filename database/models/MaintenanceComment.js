const mongoose = require("mongoose");

const { Schema } = mongoose;

const MaintenanceCommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: body.Schema.ObjectId,
    ref: "User"
  }
});

// This creates our model from the above schema, using mongoose's model method
const MaintenanceComment = mongoose.model("MaintenanceComment", MaintenanceCommentSchema);

// Export the Note model
module.exports = MaintenanceComment;

// Routes we will need for Comments:
// Create/Post
// --- maybe don't have a delete option -- it's probably good to just keep a running info log
// got rid of the connection in this file to the item since we already have the connection
// between the Schemas within the ItemSchema.. it doesn't need have an instance in two places.