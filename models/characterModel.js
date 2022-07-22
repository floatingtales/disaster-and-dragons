const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  stats: {
    type: Object,
  },
  charInfo: {
    type: Object,
  },
  physicalInfo: {
    type: Object,
  },
  skills: {
    type: Object,
  },
  attacks: {
    type: Array,
  },
  items: {
    type: Array,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('characters', characterSchema);
