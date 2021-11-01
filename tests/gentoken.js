(async () => {
let Keyv = require('keyv')
let authorizations = new Keyv('sqlite://authorizations.sqlite', { table: 'authentication', namespace: 'token'})
await authorizations.set('developer_testing_token', '1', 900000)
console.log('Testing Token Generated')
})