const db = require('../src/db.js')
db.start()

const server = require('../src/server.js')
server.start()