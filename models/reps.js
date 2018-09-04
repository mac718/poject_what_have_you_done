const request = require('request');
const rp = require('request-promise')

const baseUri = 'https://www.googleapis.com/civicinfo/v2/';

const googleKey = process.env.CIVIC_INFO_API_KEY;
//wrap method in promise

var extractRepInfo = function(result){
    let parsedResult = JSON.parse(result);
          let houseRepIndices = parsedResult.offices.filter(obj => 
                  { return obj.name.includes('United States House of Representatives'); })[0].officialIndices;
          

          let houseReps = [];
          
          houseRepIndices.forEach( i => {
            houseReps.push(parsedResult.officials[i]);
          });

          console.log(houseReps);

          return houseReps;

  }

class Rep {
  findReps(address) {
    var options = {
        uri: `${baseUri}representatives`,
        qs: {
            key: googleKey, // -> uri + '?access_token=xxxxx%20xxxxx'
            address: address
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: false // Automatically parses the JSON string in the response
    };

    return rp(options)
      .then(function (result) {
          return Promise.resolve(extractRepInfo(result));
          
          
      })
      .catch(function (err) {
          console.log('nope');
      });

    // console.log('in instance method');
    // return Promise.resolve(request(, 
    //   function(error, response, body) {
    //     //console.log(body);
    //     console.log('in requst');
    //     return body;
    //   })).then(result => { return result });
    
    
  }
}

module.exports = Rep;