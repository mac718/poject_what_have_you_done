var express = require('express');
var router = express.Router();

var Rep = require('../models/reps');

var rep = new Rep;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})

module.exports = router;
