const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
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

const listSchema = new Schema({
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
  tasks: [taskSchema],
});

module.exports = mongoose.model('List', listSchema);
