const mongoose = require('mongoose');

const { Schema } = mongoose;

const MaintenanceCommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const MaintenanceComment = mongoose.model('MaintenanceComment', MaintenanceCommentSchema);

module.exports = MaintenanceComment;