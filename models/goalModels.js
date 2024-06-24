const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
});

const goalSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  milestone: [milestoneSchema],
});

module.exports = mongoose.model('List', goalSchema);
