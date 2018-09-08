const request = require('request');
const rp = require('request-promise');
const fs = require('file-system');

const baseUri = "https://api.propublica.org/congress/v1/";

const proPublicaKey = process.env.PRO_PUBLICA_KEY;

class Vote {
  getHouseMembers() {
    return rp(`${baseUri}115/house/members.json`, { headers: {'X-API-Key': proPublicaKey }})
       .then( result => {
          let parsedResult = JSON.parse(result);
          let targetedHouseReps = fs.readFileSync('houseReps.json', (err, data) => {});
          let houseRepIds = [];
          parsedResult.results[0].members.forEach( rep => {
            JSON.parse(targetedHouseReps).forEach( targetedRep => {
              if (targetedRep.name.includes(rep.last_name) && targetedRep.state == rep.state) {
                houseRepIds.push(rep.id);
              }
            })
          })
          return Promise.resolve(houseRepIds);
       });


    //let ids = members.filter( rep => {


  }

  getSenateMembers() {
    return rp(`${baseUri}115/senate/members.json`, { headers: {'X-API-Key': proPublicaKey }})
        .then( result => {
            let parsedResult = JSON.parse(result);
            let targetedSenateReps = fs.readFileSync('senateReps.json', (err, data) => {});
            let senateRepIds = [];
            parsedResult.results[0].members.forEach( rep => {
              JSON.parse(targetedSenateReps).forEach( targetedRep => {
                if (targetedRep.name.includes(rep.last_name) && targetedRep.state == rep.state) {
                  senateRepIds.push(rep.id);
                }
              })
            })
            return Promise.resolve(senateRepIds);
         });
  }

  getRepVotes(chamber, index) {
    //return rp(`${baseUri}members/K000388/votes.json`, { headers: {'X-API-Key': proPublicaKey }});
    if (chamber == 0) {
    return this.getHouseMembers()
      .then( result => {
        return rp(`${baseUri}members/${result[0]}/votes.json`, { headers: {'X-API-Key': proPublicaKey }});
      })
    } else if (chamber == 1 && index == 0) {
      return this.getSenateMembers()
      .then( result => {
        return rp(`${baseUri}members/${result[0]}/votes.json`, { headers: {'X-API-Key': proPublicaKey }});
      })
    } else {
      return this.getSenateMembers()
      .then( result => {
        return rp(`${baseUri}members/${result[1]}/votes.json`, { headers: {'X-API-Key': proPublicaKey }});
      })
    };
  }
}

module.exports = Vote;