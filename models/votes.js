const request = require('request');
const rp = require('request-promise');

const baseUri = "https://api.propublica.org/congress/v1/";

const proPublicaKey = process.env.PRO_PUBLICA_KEY;

class Vote {
  getHouseMembers() {
    let members = rp(`${baseUri}115/house/members.json`, { X-API-Key: PRO_PUBLICA_KEY });

    
  }

  getSenateMembers() {
    let members = rp(`${baseUri}115/senate/members.json`, { X-API-Key: PRO_PUBLICA_KEY });
  }

  getRepVotes() {

  }
}

module.exports = Vote;