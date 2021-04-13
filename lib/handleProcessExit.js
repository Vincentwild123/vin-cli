const fs = require('fs')
const chalk = require('chalk');
module.exports = function handleProcessExit(dirName) {
    //listen to the ctrl+c event to rollback the action create dir
    process.on('SIGINT', function () {
        process.exit(1);
    });
    process.on('exit', function handleProcessExit1(code) {
        if (code === 1) {
            console.log(chalk.red('everything had rollback!'))
            fs.rmdir(dirName, (err) = {})
        }
    })
}