const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Cohort = require('../models/cohorts');


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
    category,
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




module.exports = router;
