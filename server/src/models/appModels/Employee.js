const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  isAdmin: { type: mongoose.Schema.ObjectId, ref: 'Admin' },

  firstname: {
    type: String,
    trim: true,
    required: true,
  },

  lastname: {
    type: String,
    trim: true,
    required: true,
  },

  phone: {
    type: Number,
    trim: true,
    required: true,
  },

  address: {
    type: String,
    trim: true,
    required: true,
  },

  gender: String,

  birthday: Date,

  position: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },

  // idCardNumber: {
  //   type: String,
  //   trim: true,
  // },

  // photo: {
  //   type: String,
  //   trim: true,
  // },

  // headerImage: {
  //   type: String,
  //   trim: true,
  // },

  // customField: [
  //   {
  //     fieldName: {
  //       type: String,
  //       trim: true,
  //       lowercase: true,
  //     },
  //     fieldType: {
  //       type: String,
  //       trim: true,
  //       lowercase: true,
  //       default: 'string',
  //     },
  //     fieldValue: {},
  //   },
  // ],

  // images: [
  //   {
  //     id: String,
  //     name: String,
  //     path: String,
  //     description: String,
  //     isPublic: {
  //       type: Boolean,
  //       default: true,
  //     },
  //   },
  // ],
  // files: [
  //   {
  //     id: String,
  //     name: String,
  //     path: String,
  //     description: String,
  //     isPublic: {
  //       type: Boolean,
  //       default: true,
  //     },
  //   },
  // ],
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});
employeeSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Employee', employeeSchema);
