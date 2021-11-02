var fs = require('fs')
var moment = require('moment')

let time = moment().format('LLLL')
let logJSON = require('../.azrael/log.json')
let lastID = logJSON.id
let latestID = parseInt(logJSON.id) + 1

fs.writeFileSync('./.azrael/log.json', '{"id": "' + latestID + '"}', err => {
    console.log(err);
});
fs.writeFileSync('./.azrael/logs/' + time + '.txt', '! Begin Logs', err => {
    	console.log(err);
    });

const db = require('../src/db.js')
db.start()

const server = require('../src/server.js')
server.start()