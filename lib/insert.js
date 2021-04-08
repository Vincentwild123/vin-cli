const path = require('path')
const fs = require('fs')
const chalk = require('chalk');
module.exports = function insert(dirName, meta) {
    try {
        //找到
        const filename = path.join(dirName, 'package.json');
        if (fs.existsSync(filename)) {
            // 读取目标文件的package文件
            const content = fs.readFileSync(filename).toString();
            let dt = JSON.parse(content);
            for (let key of Object.keys(meta)) {
                dt[key] = meta[key]
            }
            fs.writeFile(filename, JSON.stringify(dt), 'utf8', (err) => {
                if (err)
                    console.log(chalk.red(err));
                else {
                    console.log(chalk.bgCyan('Success! have a Happy Coding ^ 0 ^ '));
                }
            })
        } else {
            throw new Error('there is no package.json in the template!')
        }
    } catch (err) {
        console.error(err);
    }
    return;
}