const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const { Schema } = mongoose;

// Using the Schema constructor, create a new CommentSchema object
const CommentSchema = new Schema({
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
const Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;
