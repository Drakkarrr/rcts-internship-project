const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
    required: true,
  },
  suffix: {
    type: String,
  },
  barangay: {
    type: String,
    required: true,
  },
  // photo: {
  //   type: String,
  //   trim: true,
  // },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },

  // currency_name: {
  //   type: String,
  //   required: true,
  // },
  // color: {
  //   type: String,
  //   lowercase: true,
  // },
  // currency_code: {
  //   type: String,
  //   uppercase: true,
  //   required: true,
  //   maxLength: 3,
  // },
  // currency_symbol: {
  //   type: String,
  //   required: true,
  // },
  // currency_position: {
  //   type: String,
  //   required: true,
  //   default: 'before',
  //   enum: ['after', 'before'],
  // },
  // decimal_sep: {
  //   type: String,
  //   required: true,
  //   default: '.',
  // },
  // thousand_sep: {
  //   type: String,
  //   required: true,
  //   default: ' ',
  // },
  // cent_precision: {
  //   type: Number,
  //   required: true,
  //   default: 2,
  // },
  // zero_format: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
  // isDefault: {
  //   type: Boolean,
  //   default: false,
  // },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Currency', schema);
