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

router.get('/students/create', (req, res, next) => {
  
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
    res.json({message: 'cohort created'}).status(200);
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
    projectPresentationLink,
    cohortId
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
    projectPresentationLink,
    cohortId
  });

  Student.create(newStudent)
  .then((student) => {
    console.log('New student was created');
    res.json(student).status(200);
  })
  .catch(error => {
    console.error(error);
  });
});

router.get('/cohorts/:cohortId', (req, res, next) => {
  const cohortId = req.params.cohortId;
  Cohort.findById(cohortId)
  .then((cohort) => {
    Student.find({"cohortId": cohort._id})
    .then((results) => {
      res.json(results);
    })
  })
  .catch((next));
  
})




module.exports = router;