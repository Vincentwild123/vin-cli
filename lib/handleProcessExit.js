const fs = require('fs')
const chalk = require('chalk');
module.exports = function handleProcessExit(dirName) {
    process.on('exit', function handleProcessExit1(code) {
        console.log(chalk.red('everything had rollback!'))
        if (code === 1) {
            fs.rmdir(dirName, (err) = {})
        }
    })
}