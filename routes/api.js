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




module.exports = router;
