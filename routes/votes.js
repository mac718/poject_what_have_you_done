var express = require('express');
var router = express.Router();
var fs = require('file-system');

var Rep = require('../models/reps');

var rep = new Rep;

var Vote = require('../models/votes');

var vote = new Vote;

/* GET home page. */

router.get('/', function(req, res, next) {
  // let info = Promise.resolve( rep.findReps('5460 Whitmore Lake Rd') );
  // info.then(function(result) { res.render('index', { info: result }) });
  // console.log('in route handler' + info);
  // rep.findReps('5460 Whitmore Lake Rd').then(function(result) {
     //rep.findReps('5460 Whitmore Lake Rd',  result => {res.render('index', { info: result }, console.log('ass'))})//.finally( result => {res.render('index', { info: result })}) 
  //   console.log('post render');
  // });

  //vote.getRepVotes()
  //let targetedHouseReps = fs.readFileSync('houseReps.json', (err, data) => {});

  //Promise.resolve(vote.getRepVotes()).then(result => { res.render('votes', { repInfo: JSON.parse(result)[0] }) });
  vote.getRepVotes().then( result => { res.render('votes', {repInfo: JSON.parse(result).results[0].votes })});
})

module.exports = router;
