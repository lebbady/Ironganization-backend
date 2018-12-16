const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  prework: {
    status: {
      type: String,
      enum: ["Done", "Not done"]
    },
    level: {
      type: String,
      enum: ["Low", "Medium", "High"]
    }
  },
  project: {
    difficulty: {
      type: String,
      enum: ["Low", "Medium", "High"]
    },
    quality: {
      type: String,
      enum: ["Bad", "Medium", "Good"]
    },
    deployLink: {
      type: String,
    },
    presentationLink: {
      type: String
    }
  }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;