const request = require('request');

const baseUri = 'https://www.googleapis.com/civicinfo/v2/';

const googleKey = process.env.CIVIC_INFO_API_KEY;

class Rep {
  findReps(address) {
    request(`${baseUri}representatives?key=${googleKey}&address=${address}`, 
      function(error, response, body) {
        let info = body;
        console.log(info);
      })
  }
}

module.exports = Rep;