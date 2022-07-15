const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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
  friends: {
    type: Array,
  },
  profileImg: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('userModel', userSchema);
