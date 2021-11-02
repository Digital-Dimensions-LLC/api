module.exports = {
    async start() {
const { BID } = require('./functions/banID.js')
const express = require('express')
const bodyParser = require('body-parser');
const responseTime = require('response-time')
const moment = require('moment')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(responseTime())

app.get('/api/v1/bans/check/:id', async function(req, res) {
if (req.params.id.length < 14) {
    let obj = {
        status: 400,
        message: "Invalid Discord User ID"
    }
    res.status(400).send(obj)
    return;
}
let isBanned = await bans.get(req.params.id)

if (!isBanned) {
    let obj = {
    status: 200,
    banned: false // Boolean
}
    res.status(200).send(obj)
    return;
}
if (isBanned) {
    let obj = {
    status: 200,
    banned: true // Boolean
}
    res.status(200).send(obj)
    return;
}
})

// Get Ban
app.get('/api/v1/bans/get/:id', async function(req, res, error) {
if (req.params.id.length < 14) {
    let obj = {
        status: 400,
        message: "Invalid Discord User ID"
    }
    res.status(400).send(obj)
    return;
}
let isBanned = await bans.get(req.params.id)
if (!isBanned) {
    let obj = {
    status: 200,
    banned: false // Boolean
}
    res.status(200).send(obj)
    return;
}
if (isBanned) {
    let REASON = await reason.get(req.params.id)
    let PROOF = await proof.get(req.params.id)
    let MOD = await moderator.get(req.params.id)
    let NOTES = await notes.get(req.params.id)
    let TIME = await timestamp.get(req.params.id)
    let obj = {
    status: 200,
    banned: true, // Boolean
    bandata: {
        id: req.params.id,
        reason: REASON,
        proof: PROOF,
        moderator: MOD,
        timestamp: TIME,
        notes: NOTES
    }
}
    res.status(200).send(obj)
    return;
}
  
})
// Add Ban
app.post('/api/v1/bans/add', async function(req, res, error) {
let Authorization = req.headers['authorization']
if (!Authorization) {
    let obj = {
        status: 401,
        message: 'Unauthorized'
    }
    res.status(401).send(obj)
    return;
}
let validAuth = await authorizations.get(Authorization)
if (!validAuth) {
    let obj = {
        status: 403,
        message: 'Forbidden'
    }
    res.status(403).send(obj)
    return;
}
if (!req.body) {
    let obj = {
        status: 400,
        message: "Expected Body. No Body Recieved."
    }
    res.status(400).send(obj)
    return;
}
if (!req.body.id) {
    let obj = {
        status: 400,
        message: "Missing Field: ID"
    }
    res.status(400).send(obj)
    return;
}
if (req.body.id.length < 14) {
    let obj = {
        status: 400,
        message: "Invalid Discord User ID"
    }
    res.status(400).send(obj)
    return;
}
if (!req.body.reason) {
    let obj = {
        status: 400,
        message: "Missing Field: reasoncode"
    }
    res.status(400).send(obj)
    return;
}
if (!req.body.proof) {
    let obj = {
        status: 400,
        message: "Missing Field: proof"
    }
    res.status(400).send(obj)
    return;
} else {
let ID = req.body.id
let RC = req.body.reason
let PROOF = req.body.proof
let MOD = validAuth
let NOTES = req.body.notes

if (!req.body.notes) {
    NOTES = 'None'
}
  
if (req.body.reason == NaN || req.body.reason > 6) {
    let obj = {
        status: 400,
        message: 'Invalid Reason Code'
    }
    res.status(400).send(obj)
    return;
}
let REASON = 'Undefined'
	if (RC == 1) {
        REASON = 'DM Advertising Servers/Bots'
	}
    if (RC == 2) {
        REASON = 'Spamming in channels/DM\'s that do not allow spam.'
	}
    if (RC == 3) {
        REASON = 'Harming users/servers via raiding.'
	}
    if (RC == 4) {
        REASON = 'Harming users/servers via nuking.'
	}
    if (RC == 5) {
        REASON = 'Harassing users/servers.'
	}
    if (RC == 6) {
        REASON = 'Sending NSFW/NSFL content in SFW channels.'
	}
let isBanned = await bans.get(req.body.id)
if (isBanned) {
    let obj = {
        status: 400,
        message: 'User is already banned'
    }
    res.status(400).send(obj)
    return;
}
let MODID = await authorizations.get(Authorization)
let TIME = moment().format('LLLL') + ' CST'

ID = ID.toString();

await bans.set(ID, true)
await reason.set(ID, REASON)
await proof.set(ID, PROOF)
await moderator.set(ID, MOD)
await notes.set(ID, NOTES)
await timestamp.set(ID, TIME)

let bid = BID(10)
let obj = {
    status: 200,
    bid: bid
}
res.status(200).send(obj)
}
})

// Edit Ban
app.patch('/api/v1/bans/edit', async function(req, res, error) {
let Authorization = req.headers['authorization']
if (!Authorization) {
    let obj = {
        status: 401,
        message: 'Unauthorized'
    }
    res.status(401).send(obj)
    return;
}
let validAuth = await authorizations.get(Authorization)
if (!validAuth) {
    let obj = {
        status: 403,
        message: 'Forbidden'
    }
    res.status(403).send(obj)
    return;
}
if (!req.body) {
    let obj = {
        status: 400,
        message: "Expected Body. No Body Recieved."
    }
    res.status(400).send(obj)
    return;
}
if (!req.body.id) {
    let obj = {
        status: 400,
        message: "Missing Field: ID"
    }
    res.status(400).send(obj)
    return;
}
if (req.body.id.length < 14) {
    let obj = {
        status: 400,
        message: "Invalid Discord User ID"
    }
    res.status(400).send(obj)
    return;
}
if (!req.body.type) {
    let obj = {
        status: 400,
        message: "Missing Field: type"
    }
    res.status(400).send(obj)
    return;
}
if (req.body.type.toLowerCase() !== 'reason' && req.body.type.toLowerCase() !== 'proof' && req.body.type.toLowerCase() !== 'notes') {
    let obj = {
        status: 400,
        message: "Invalid Type"
    }
    res.status(400).send(obj)
    return;
}
if (!req.body.value) {
    let obj = {
        status: 400,
        message: "Missing Field: value"
    }
    res.status(400).send(obj)
    return;
} else {
let ID = req.body.id
let TYPE = req.body.type.toLowerCase()
let VALUE = req.body.value
let MOD = validAuth
let MODID = await authorizations.get(Authorization)
let isBanned = await bans.get(req.body.id)
if (!isBanned) {
    let obj = {
    status: 404,
    message: `No Ban Found For ${req.body.id}`
	}
    res.status(404).send(obj)
    return;
}
ID = ID.toString();
if (TYPE == 'reason') {
    let REASON = 'Undefined'
    let RC = parseInt(VALUE)
    if (RC == 1) {
        REASON = 'DM Advertising Servers/Bots'
	}
    if (RC == 2) {
        REASON = 'Spamming in channels/DM\'s that do not allow spam.'
	}
    if (RC == 3) {
        REASON = 'Harming users/servers via raiding.'
	}
    if (RC == 4) {
        REASON = 'Harming users/servers via nuking.'
	}
    if (RC == 5) {
        REASON = 'Harassing users/servers.'
	}
    if (RC == 6) {
        REASON = 'Sending NSFW/NSFL content in SFW channels.'
	}
    if (RC == NaN) {
        let obj = {
            status: 400,
            message: 'Invalid Reason Code'
        }
        res.status(400).send(obj)
        return;
    }
    await reason.set(ID, REASON)
    
    let obj = {
        status: 200,
        message: 'Ban Updated'
    }
    res.status(200).send(obj)
    return;
}
if (TYPE == 'proof') {
    await proof.set(ID, VALUE)
    
    let obj = {
        status: 200,
        message: 'Ban Updated'
    }
    res.status(200).send(obj)
    EDIT(MODID, ID, 'PROOF', VALUE)
    return;
}
if (TYPE == 'notes') {
    await notes.set(ID, VALUE)
    
    let obj = {
        status: 200,
        message: 'Ban Updated'
    }
    res.status(200).send(obj)
    return;
}}
})
// Delete Ban
app.delete('/api/v1/bans/delete/:id/', async function(req, res, error) {
let Authorization = req.headers['authorization']
if (!Authorization) {
    let obj = {
        status: 401,
        message: 'Unauthorized'
    }
    res.status(401).send(obj)
    return;
}
let validAuth = await authorizations.get(Authorization)
if (!validAuth) {
    let obj = {
        status: 403,
        message: 'Forbidden'
    }
    res.status(403).send(obj)
    return;
}
if (req.params.id.length < 14) {
    let obj = {
        status: 400,
        message: "Invalid Discord User ID"
    }
    res.status(400).send(obj)
    return;
}
if (!req.body.reason.length || req.body.reason.length < 1) {
    let obj = {
        status: 400,
        message: "Missing Field: Reason"
    }
    res.status(400).send(obj)
    return;
}
ID = ID.toString();
let REASON = req.body.reason
let MODID = await authorizations.get(Authorization)
let isBanned = await await bans.get(req.params.id)
if (!isBanned) {
    let obj = {
    status: 404,
    message: `No Ban Found For ${req.params.id}`
	}
    res.status(404).send(obj)
    return;
} else {

await bans.delete(req.params.id)
await moderator.delete(req.params.id)
await timestamp.delete(req.params.id)
await notes.delete(req.params.id)
await proof.delete(req.params.id)
await reason.delete(req.params.id)

let ALTCODE = 1
if (REASON.toLowerCase().includes('error') || REASON.toLowerCase().includes('testing')) ALTCODE = 0
if (REASON.toLowerCase().includes('courtesy')) ALTCODE = 10
if (REASON.toLowerCase().includes('contested')) ALTCODE = 20
if (REASON.toLowerCase().includes('audit')) ALTCODE = 99

let obj = {
    status: 200,
    message: 'Ban Removed',
    altcode: ALTCODE
}

res.status(200).send(obj)
return;
}
})

// 404 Not Found
app.get('*', (req, res, next) => {
  res.status(404).send({status: 404, message: 'Not Found', details: { requested_url: req.path }})
})
// 500 Internal Server Error
app.use(function(error, req, res, next) {
  console.log(error)
  res.status(500).send({status: 500, message: 'Internal Server Error'})
})
// Start Server and listen on port
app.listen(port, () => {
    console.log('Server Online')
})
    }}