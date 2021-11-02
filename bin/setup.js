var shell = require("shelljs");
var fs = require('fs')
console.log('Installing Additional Dependencies')
shell.exec("npm install express body-parser moment response-time keyv @keyv/sqlite");
console.log('\n\n')
console.log('Dependencies Installed')
console.log('\n')
console.log('Finishing Setup')
let time = Date.now()
let dir = './.azrael/logs/'
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync('./.azrael/log.json', '{"id": "0"}', err => {
    console.log(err);
});
console.log('Setup Completed')
console.log('\n')
console.log('Please run npm start')