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

  requestor: { type: mongoose.Schema.ObjectId, ref: 'Requestor', autopopulate: true },

  events: { type: mongoose.Schema.ObjectId, ref: 'Events', autopopulate: true },

  name: {
    type: String,
    required: true,
  },
  barangay: {
    type: String,
    trim: true,
    enum: ['barangay 1', 'barangay 2', 'barangay 3', 'barangay 4', 'barangay 5'],
    required: true,
  },

  appointmentType: {
    type: String,
    default: 'walk in',
    enum: ['walk in', 'online'],
    required: true,
  },

  // company: { type: mongoose.Schema.ObjectId, ref: 'Company', autopopulate: true },
  // people: { type: mongoose.Schema.ObjectId, ref: 'People', autopopulate: true },
  // interestedIn: [{ type: mongoose.Schema.ObjectId, ref: 'Product' }],
  // offer: [{ type: mongoose.Schema.ObjectId, ref: 'Offer' }],
  // converted: { type: Boolean, default: false },
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  // assigned: { type: mongoose.Schema.ObjectId, ref: 'Admin' },
  // subTotal: {
  //   type: Number,
  // },
  // taxTotal: {
  //   type: Number,
  // },
  // total: {
  //   type: Number,
  // },
  // discount: {
  //   type: Number,
  // },
  // images: [
  //   {
  //     id: String,
  //     name: String,
  //     path: String,
  //     description: String,
  //     isPublic: {
  //       type: Boolean,
  //       default: false,
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
  //       default: false,
  //     },
  //   },
  // ],
  // category: String,
  // status: String,
  // notes: String,
  // source: String,
  // approved: {
  //   type: Boolean,
  //   default: false,
  // },
  // tags: [
  //   {
  //     type: String,
  //     trim: true,
  //     lowercase: true,
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

schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Appointments', schema);
