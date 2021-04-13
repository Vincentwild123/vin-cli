module.exports = function (installer) {
    let commander;
    switch (installer) {
        case 'yarn':
            commander = 'yarn';
            break;
        case 'npm':
            commander = 'npm install';
            break;
        case 'cnpm':
            commander = 'cnpm install';
            break;
        default:
            commander = 'yarn'
            break;
    }
    return commander;
}