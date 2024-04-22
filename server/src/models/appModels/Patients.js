const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  name: {
    type: String,
    required: true,
  },
  description: String,
  // productCategory: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'ProductCategory',
  //   required: true,
  //   autopopulate: true,
  // },

  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Patients', schema);
