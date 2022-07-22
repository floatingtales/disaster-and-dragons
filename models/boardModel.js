const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  chat_logs: {
    type: Object,
  },
  characters: {
    type: Array,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('boards', boardSchema);
