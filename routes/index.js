var express = require('express');
var router = express.Router();

var Rep = require('../models/reps');

var rep = new Rep;

/* GET home page. */
router.get('/', function(req, res, next) {
  // let info = Promise.resolve( rep.findReps('5460 Whitmore Lake Rd') );
  // info.then(function(result) { res.render('index', { info: result }) });
  // console.log('in route handler' + info);
  // rep.findReps('5460 Whitmore Lake Rd').then(function(result) {
     //rep.findReps('5460 Whitmore Lake Rd',  result => {res.render('index', { info: result }, console.log('ass'))})//.finally( result => {res.render('index', { info: result })}) 
  //   console.log('post render');
  // });


  res.render('index');
})

module.exports = router;
