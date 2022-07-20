const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  data: {
    type: Object,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('characters', characterSchema);
