const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  board_name: {
    required: true,
    unique: true,
    type: String,
  },
  chat_logs: {
    type: Array,
  },
  characters: {
    type: Array,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('boards', boardSchema);
