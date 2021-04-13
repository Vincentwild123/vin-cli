const chalk = require('chalk')

function errorLogger(msg) {
    console.log(chalk.red(msg));
}

function infoLogger(msg) {
    console.log(chalk.white(msg));
}

function successLogger(msg) {
    console.log(chalk.green(msg));
}
module.exports = {
    errorLogger,
    infoLogger,
    successLogger
}