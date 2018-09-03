var express = require('express');
var router = express.Router();

var Rep = require('../models/reps');

var rep = new Rep;

/* GET home page. */
router.get('/representatives', function(req, res, next) {
  let address = `${req.query.address}`;
  rep.findReps(address,  result => 
    {res.render('representatives', { info: result }, console.log('ass'))})
  //res.render('representatives');
})

module.exports = router;