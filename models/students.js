const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const studentSchema = new Schema ({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  pictureUrl: {
    type: String
  },
  preworkStatus: {
    type: String,
    enum: ["Done", "Not done"]
  },
  preworkLevel: {
    type: String,
    enum: ["Low", "Medium", "High"]
  },
  projectDifficulty: {
    type: String,
    enum: ["Low", "Medium", "High"]
  },
  projectQuality: {
    type: String,
    enum: ["Bad", "Medium", "Good"]
  },
  projectPresentationLink: {
    type: String,
  },
  projectDeployLink: {
    type: String,
  },
  cohortId: {
    type: ObjectId,
    ref: 'Cohort'
  }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;