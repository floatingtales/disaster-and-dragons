const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  members: {
    // fill this with the user members
    _id: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profile_img: {
      type: String,
    },
  },
  chat_logs: {
    type: Object,
  },
  // will add character details here
}, {
  timestamps: true,
});

module.exports = mongoose.model('boards', boardSchema);
