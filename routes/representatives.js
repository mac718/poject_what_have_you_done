var express = require('express');
var router = express.Router();

var Rep = require('../models/reps');

var rep = new Rep;

/* GET home page. */
router.get('/representatives', function(req, res, next) {
  let address = `${req.query.address}`;
  rep.findReps(address).then(  result => 
    {res.render('representatives', { houseRepInfo: result[0], senateRepInfo: result[1], address: address })})
  //res.render('representatives');
})

module.exports = router;