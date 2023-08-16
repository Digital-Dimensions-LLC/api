app.post('/v5/bans/add', async function(req, res, error) {
/*

#################################################################
#################################################################
#################################################################
#################################################################

AUTHENTICATION LOGIC REMOVED FOR SECURITY OF LIVE APIs

#################################################################
#################################################################
#################################################################
#################################################################

*/
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
if (req.body.id.length < 16) {
    let obj = {
        status: 400,
        message: "Invalid Discord User ID"
    }
    res.status(400).send(obj)
    return;
}
let validID = true
await DISCORD_CLIENT2.users.fetch(req.body.id)
    .catch(() => validID = false)
    
if (validID == false) {
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
if (immune.includes(ID.toString())) {
    let obj = {
        status: 400,
        message: "Ban Restricted: User has Immunity"
    }
    res.status(400).send(obj)
    return;
}
if (isNaN(req.body.reason)) {
    let obj = {
        status: 400,
        message: 'Invalid Reason Code'
    }
    res.status(400).send(obj)
    return;
}
if (req.body.reason > 20) {
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
    if (RC == 7) {
        REASON = 'Harming users via DDoS/DDoX/IP Logging.'
	}
    if (RC == 8) {
        REASON = 'Harming users via Phishing.'
	}
    if (RC == 20) {
        REASON = 'Administrative Ban.'
	}
    if (RC == 500) {
        REASON = 'Harming users/servers via raiding (confirmed by 3rd party system)'
	}
    if (RC == -903) {
        REASON = 'Developer Testing.'
	}
if (!PROOF.includes('cdn.azrael.gg') && !PROOF.includes('cdn.####.com') && !PROOF.includes('global.cdn.digitaldimensions.cc') && !PROOF.includes('cdn.dragons-are-cool.com') && !PROOF.includes('bcdn.digitaldimensions.cc')) {
        let obj = {
            status: 400,
            message: 'Invalid Proof Link'
        }
        res.status(400).send(obj)
        return;
    }
    if (!PROOF.toLowerCase().endsWith('.png') && !PROOF.toLowerCase().endsWith('.jpg') && !PROOF.toLowerCase().endsWith('.jpeg')) {
        let obj = {
            status: 400,
            message: 'Invalid Image Format'
        }
        res.status(400).send(obj)
        return;
    }
let mongoData = await MONGO_READ(req.body.id)
if (mongoData?.banned == true) {
    let obj = {
        status: 400,
        message: 'User is already banned'
    }
    res.status(400).send(obj)
    return;
}
let MODID = await authorizations.get(Authorization)
let TIME = moment().format('LLLL') + ' CST'

let ban_obj = {
    id: ID,
    reason: REASON,
    proof: PROOF,
    moderator: MOD,
    notes: NOTES,
    timestamp: TIME
}

let written = await MONGO_WRITE(ban_obj)
if (written !== true) return res.status(500).send({ status: 500, message: 'Unknown Error; typeof DB.WRITE'})

let bid = 'AZ-' + BID(10)
let obj = {
    status: 200,
    bid: bid
}
let pStatsTotal = await stats.get('total')
if (!pStatsTotal) {
    pStatsTotal = 0
}
let MODID2 = await modID.get(MODID)
let pModStatsTotal = await modStats.get(MODID)
if (!pModStatsTotal) {
    pModStatsTotal = 0
}
    

let nst = parseInt(pStatsTotal) + 1
let nmst = parseInt(pModStatsTotal) + 1

await stats.set('total', nst)
await modStats.set(MODID, nmst)
await modStats.set(MODID2, nmst)
await trueID.set(MODID2, MODID)
    
res.status(200).send(obj)
ADD(MODID, ID, RC, PROOF, bid, NOTES)
return;
}
})
