const {
    execSync,
} = require('child_process');
const getInstallCommander = require('../utils/getInstallCommander.js');


module.exports = function installNodeModules(installer, path) {
    let command = getInstallCommander(installer);
    try {
        execSync(command, {
            cwd: path,
            stdio: 'inherit',
        });
    } catch (err) {
        throw new Error(err);
    }
}