const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyB1O2jFzS3-W-3puT64RCyX39808TvKMyg',
    json: true
}, (error, response, body) => {
    console.log(body);
});