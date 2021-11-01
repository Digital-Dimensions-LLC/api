module.exports = {
        async start() {
            let Keyv = require('keyv')
            global.authorizations = new Keyv('sqlite://authorizations.sqlite', { table: 'authentication', namespace: 'token'})
        }}