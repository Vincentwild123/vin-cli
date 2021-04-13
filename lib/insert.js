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
            dt['name'] = meta['name'];
            dt['author'] = meta['author'];
            dt['description'] = meta['description'];
            dt['version'] = meta['version'];
            fs.writeFileSync(filename, JSON.stringify(dt), 'utf8')
        } else {
            throw new Error('there is no package.json in the template!')
        }
    } catch (err) {
        console.error(err);
    }
    return;
}