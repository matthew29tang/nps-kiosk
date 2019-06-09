var port = process.env.PORT || 8888; //sets local server port to 8888
var express = require('express'); // Express web server framework
var request = require('request');

var token = 'xLzbrpcuMwDXar76GlDLcIZrzRu7Cv1KJHz7yZZX';

var redirect_uri = 'http://localhost:8888'; // Your redirect uri in case you are using apis
var app = express();
var data = {};
data.parks = {};
var allParks = [];

console.log("Starting up server... Making requests");

//Ping server every 10mins to prevent Heroku from idling
var https = require("https");
setInterval(function() {
    https.get("https://nps-kiosk-server.herokuapp.com/status");
	console.log("Ping!");
}, 600000);

function objToQueryString(obj){
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }
  return keyValuePairs.join('&');
}

function formatURL(params, req) {
  params.api_key = token;
  return `https://developer.nps.gov/api/v1/${req}?` + objToQueryString(params);
}

function getRequest(callback, url, stateCode){
  var options = {
    url: url,
    method: 'GET'
  };
  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log("Received " + stateCode);
      callback(formatParks(body, stateCode), stateCode);
    } else {
      console.log("Too many requests... Retrying");
      getRequest(callback, url, stateCode);
    }
  });
}

function formatParks(parks, stateCode){
  return {data: JSON.parse(parks).data.map(park => {
    var p = {
      description: park.description,
      parkCode: park.parkCode,
      fullName: park.fullName,
      stateCode: stateCode
    }
    var search = {
      label: park.fullName + ` (${stateCode})`,
      value: park.parkCode
    }
    allParks.push(search);
    return p;
  })}
}
const states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 
'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 
'WA', 'WV', 'WI', 'WY'];

states.map(state => {
  getRequest((parks, state) => data.parks[state] = parks, formatURL({stateCode: state}, 'parks'), state);
})

app.get('/parks', function(req, res) {
  console.log("Displaying parks");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(data.parks[req.query.stateCode]);
});

app.get('/allParks', function(req, res) {
  console.log("Displaying allParks");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send(allParks);
});

app.get('/status', function(req, res) {
  console.log("Displaying status");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  var status = true;
  states.map(state => {
    if (!data.parks[state]) {
      status = false;
      console.log("Missing " + state);
    }
  })
  res.send(status);
});

app.listen(port, function() {}); //starts the server, alternatively you can use app.listen(port)