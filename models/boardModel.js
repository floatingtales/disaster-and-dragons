const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  boardName: {
    required: true,
    unique: true,
    type: String,
  },
  chatLogs: {
    type: Array,
    default: [],
  },
  characters: {
    type: Array,
    default: [],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('boards', boardSchema);
