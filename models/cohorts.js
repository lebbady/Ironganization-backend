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
    type: String
  },
  endingDate: {
    type: String
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
  }
})

const Cohort = mongoose.model('Cohort', cohortSchema);

module.exports = Cohort;