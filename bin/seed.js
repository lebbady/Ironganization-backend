'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Cohort = require('../models/cohorts');
const User = require('../models/user');

// --

mongoose.connect('mongodb://localhost/ironganization', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const encryptPassword = (passString) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(passString, salt);

}

const users = [
  {
    username: "selim1",
    password: encryptPassword("123")
  }
]

const cohorts = [
  {
  name: "Cohort",
  speciality: "Web",
  startingDate: "2019-03-05", 
  endingDate: "2019-05-05",
  language: "English",
  category: "Full-time",
  students: []
  }
]

// // create() returns a promise

Cohort.create(cohorts)
  .then(() => {
    console.log('Cohorts was created');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });

User.create(users)
.then(() => {
  console.log('Users was created');
  mongoose.connection.close();
})
.catch(error => {
  console.error(error);
});