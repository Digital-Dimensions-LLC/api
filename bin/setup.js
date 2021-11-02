var shell = require("shelljs");
var chalk = require('chalk')
var fs = require('fs')
console.log(chalk.red('Copyright (c) 2021 Azrael Interactive LLC'))
console.log(chalk.red('All Rights Reserved'))
console.log(chalk.red('https://azrael.gg'))
console.log(chalk.red('\n'))
console.log(chalk.blue('Installing Additional Dependencies'))
shell.exec("npm install express body-parser moment response-time keyv @keyv/sqlite");
console.log('\n')
console.log(chalk.blue('Dependencies Installed'))
console.log(chalk.blue('Finishing Setup'))
console.log(chalk.magenta('========>') + chalk.green(' 0%'))
console.log(chalk.magenta('=========>') + chalk.green(' 10%'))
console.log(chalk.magenta('==========>') + chalk.green(' 20%'))
console.log(chalk.magenta('===========>') + chalk.green(' 30%'))
let time = Date.now()
let dir = './.azrael/logs/'
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync('./.azrael/log.json', '{"id": "0"}', err => {
    console.log(err);
});
console.log(chalk.magenta('============>') + chalk.green(' 40%'))
console.log(chalk.magenta('=============>') + chalk.green(' 50%'))
console.log(chalk.magenta('==============>') + chalk.green(' 60%'))
console.log(chalk.magenta('===============>') + chalk.green(' 70%'))
console.log(chalk.magenta('================>') + chalk.green(' 80%'))
console.log(chalk.magenta('=================>') + chalk.green(' 90%'))
console.log(chalk.magenta('==================>') + chalk.green(' 100%'))
console.log(chalk.blue('Setup Completed'))
console.log(chalk.cyan('Please run npm start'))