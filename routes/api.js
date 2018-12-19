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
    category,
    startingDate,
    endingDate
  } = req.body;

  const newCohort = Cohort({
    language,
    category,
    startingDate,
    endingDate
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
  .catch(next);
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

router.get('/students/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;
  Student.findById(studentId)
  .then((student) => {
    res.json(student);
    })
  .catch((next));
  
})

router.delete('/students/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;
  Student.findByIdAndDelete(studentId)
  .then((student) => {
    res.status(200);
    res.json({
      message: "deleted",
      student
    });
  })
  .catch((next));
})


router.delete('/cohorts/:cohortId', (req, res, next) => {
  const cohortId = req.params.cohortId;
  Cohort.findByIdAndDelete(cohortId)
  .then((cohort) => {
    res.status(200);
    res.json({
      message: "deleted",
      cohort
    });
  })
  .catch((next));
})


router.put('/cohorts/:cohortId/edit', (req, res, next) => {
  const cohortId = req.params.cohortId;
  const {
    language,
    category,
    startingDate,
    endingDate
  } = req.body;

  const updateCohort = {
    language,
    category,
    startingDate,
    endingDate
  }

  Cohort.findByIdAndUpdate(cohortId, {$set: updateCohort}, {new: true})
  .then((results) => {
    res.json({message: 'cohort edited'}).status(200);
  })
  .catch(error => {
    console.error(error);
  });
});

router.put('/students/:studentId/edit', (req, res, next) => {
  const studentId = req.params.studentId;
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
  const updateStudent = {
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
  }

  Student.findByIdAndUpdate(studentId, {$set: updateStudent}, {new: true})
  .then((results) => {
    res.json({message: 'student edited'}).status(200);
  })
  .catch(error => {
    console.error(error);
  });
});


module.exports = router;