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
    profileImg: {
      type: String,
    },
  },
  // will add character details here
}, {
  timestamps: true,
});

module.exports = mongoose.model('boards', boardSchema);
