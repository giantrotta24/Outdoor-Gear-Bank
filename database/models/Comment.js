const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const { Schema } = mongoose;

// Using the Schema constructor, create a new CommentSchema object
const CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const Comment = mongoose.model("Comment", CommentSchema);

// Export the Note model
module.exports = Comment;


// Routes we will need for Comments:
// Create/Post
// --- maybe don't have a delete option -- it's probably good to just keep a running info log
// got rid of the connection in this file to the item since we already have the connection
// between the Schemas within the ItemSchema.. it doesn't need have an instance in two places.
