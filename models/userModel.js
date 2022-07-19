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
  friends: [this],
  profile_img: {
    type: String,
    default: '/profile/default.jpg',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('users', userSchema);
