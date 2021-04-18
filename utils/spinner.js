const ora = require('ora')
const config = {
    text: 'downloading',
    hideCursor: false,
    color: 'white',
}
const spinner = ora(config);

module.exports = spinner;


