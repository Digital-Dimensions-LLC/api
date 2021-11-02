module.exports = {
    async start() {
        await authorizations.set('developer_testing_token', '1', 900000)
    }
}