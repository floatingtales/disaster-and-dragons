const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  object: {
    type: Object,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('characters', characterSchema);
