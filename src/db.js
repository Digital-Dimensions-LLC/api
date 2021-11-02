module.exports = {
    async start() {

        let Keyv = require('keyv')

        console.log('Databases Ready')

        // Ban Database(s)
        global.bans = new Keyv('sqlite://.db/banlist.sqlite', { table: 'banlist', namespace: 'user' })
        global.reason = new Keyv('sqlite://.db/banlist.sqlite', { table: 'banlist', namespace: 'reason' })
        global.proof = new Keyv('sqlite://.db/banlist.sqlite', { table: 'banlist', namespace: 'proof' })
        global.moderator = new Keyv('sqlite://.db/banlist.sqlite', { table: 'banlist', namespace: 'moderator' })
        global.notes = new Keyv('sqlite://.db/banlist.sqlite', { table: 'banlist', namespace: 'notes' })
        global.timestamp = new Keyv('sqlite://.db/banlist.sqlite', { table: 'banlist', namespace: 'timestamp' })

        // Authentication Databases
        global.authorizations = new Keyv('sqlite://.db/authorizations.sqlite', { table: 'authentication', namespace: 'token' })
        global.authorizationsReadonly = new Keyv('sqlite://.db/authorizations.sqlite', { table: 'authentication', namespace: 'readonly' })
    }
}