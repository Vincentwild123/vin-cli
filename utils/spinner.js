const ora = require('ora')
const config = {
    text: 'downloading',
    hideCursor: true,
    color: 'white',
}
const spinner = ora(config);

module.exports = spinner;