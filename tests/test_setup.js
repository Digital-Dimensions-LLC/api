var shell = require("shelljs");
console.log('Installing Additional Dependencies')
shell.exec("npm install express body-parser moment response-time keyv @keyv/sqlite");
console.log('Dependencies Installed')
console.log('Please run npm start')
