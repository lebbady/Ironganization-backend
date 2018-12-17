const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Cohort = require('../models/cohorts');
const Student = require('../models/students');


router.get('/cohorts', (req, res, next) => {
  
  Cohort.find({})
    .then((cohortList) => {
      res.status(200);
      res.json(cohortList);
    })
    .catch(next)
});

router.post('/cohorts/create', (req, res, next) => {
  const {
    language,
    category
  } = req.body;

  const newCohort = Cohort({
    language,
    category
  });

  Cohort.create(newCohort)
  .then(() => {
    console.log('New cohort was created');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });

});

router.post('/students/create', (req, res, next) => {
  const {
    name,
    surname,
    pictureUrl,
    preworkStatus,
    preworkLevel,
    projectDifficulty,
    projectQuality,
    projectDeployLink,
    projectPresentationLink
  } = req.body;

  const newStudent = Student({
    name,
    surname,
    pictureUrl,
    preworkStatus,
    preworkLevel,
    projectDifficulty,
    projectQuality,
    projectDeployLink,
    projectPresentationLink
  });

  Student.create(newStudent)
  .then(() => {
    console.log('New student was created');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });
});


module.exports = router;