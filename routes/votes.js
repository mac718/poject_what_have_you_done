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
  let rep;
  let targetedRep;
  let party;

  if (req.query.chamber == 0) {
    reps = fs.readFileSync('houseReps.json', (err, data) => {});
    targetedRep = JSON.parse(reps)[0];
    if (targetedRep.party == 'Republican') {
      party = 'Republican';
    }
  } else {
    reps = fs.readFileSync('senateReps.json', (err, data) => {});

    
    targetedRep = JSON.parse(reps).filter( rep => { 
      return req.query.id == rep.name 
    });
    console.log(targetedRep);

    if (targetedRep[0].party == 'Republican') {
      party = 'Republican';
    }
  }

  //console.log(JSON.parse(rep)[req.query.id]);

  vote.getRepVotes(req.query.chamber, req.query.id).then( result => 
    { res.render('votes', 
      { repInfo: targetedRep[0], repVotes: JSON.parse(result).results[0].votes.slice(0, 10) , party: party, 
        phone: targetedRep[0].phones[0], website: targetedRep[0].urls[0] })});
})

module.exports = router;
