const {
    execSync,
} = require('child_process');
const fs = require('fs')
const getInstallCommander = require('../utils/getInstallCommander.js');


module.exports = function installNodeModules(installer, path) {
    let command = getInstallCommander(installer);
    try {
        let child = execSync(command, {
            cwd: path,
            stdio: 'inherit',
        });
    } catch (err) {
        throw new Error('some error in execSync function');
    }
}