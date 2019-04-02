const mongoose = require("mongoose");

const { Schema } = mongoose;

const MaintenanceCommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
});

// This creates our model from the above schema, using mongoose's model method
const MaintenanceComment = mongoose.model("MaintenanceComment", MaintenanceCommentSchema);

// Export the Note model
module.exports = MaintenanceComment;