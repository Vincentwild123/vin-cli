const ora = require('ora')
const config = {
    text: 'downloading',
    hideCursor: true,
    color: 'green',
    indent: 1,
}
const spinner = ora(config);

module.exports = spinner;