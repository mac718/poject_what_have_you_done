const request = require('request');

const baseUri = 'https://www.googleapis.com/civicinfo/v2/';

const googleKey = process.env.CIVIC_INFO_API_KEY;
//wrap method in promise
class Rep {
  findReps(address) {
    request(`${baseUri}representatives?key=${googleKey}&address=${address}`, 
      function(error, response, body) {
        let info = JSON.parse(body);
        console.log('in instance method' + info);
        return info;
      })
  }
}

module.exports = Rep;