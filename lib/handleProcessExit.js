const fs = require('fs')
const chalk = require('chalk');
module.exports = function handleProcessExit(dirName) {
    //listen to the ctrl+c event to rollback
    process.on('SIGINT', function () {
        process.exit(1);
    });
    //code 0 means normal exit
    //code 1 means need to rollback
    process.on('exit', function handleProcessExit1(code) {
        if (code === 1) {
            console.log(chalk.red('everything had rollback!'))
            //rollback the operation,delete the dir 
            fs.rmdir(dirName, (err) = {})
        }
    })
}