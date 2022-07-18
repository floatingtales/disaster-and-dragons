const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: [this],
  profileImg: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('characters', characterSchema);
