const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortSchema = new Schema ({
  name: {
    type: String,
    default: "Cohort"
  },
  speciality: {
    type: String,
    default: "Web"
  },
  startingDate: {
    type: Date,
    required: true,
  },
  endingDate: {
    type: Date,
    required: true
  },
  language: {
    type: String,
    enum: ["English", "Spanish"],
    required: true
  },
  category: {
    type: String,
    enum: ["Full-time", "Part-time"],
    required: true
  },
  students: []
})

const Cohort = mongoose.model('Cohort', cohortSchema);

module.exports = Cohort;