var express = require('express');
var router = express.Router();

var Rep = require('../models/reps');

var rep = new Rep;

/* GET home page. */
router.get('/', function(req, res, next) {
  info = rep.findReps('5460 Whitmore Lake Rd');
  res.render('index', { info: info });
  console.log('in route handler' + info);
});

module.exports = router;
