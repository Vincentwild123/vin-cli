const path = require('path')
const fs = require('fs')
const chalk = require('chalk');
module.exports = function insert(dirName, meta) {
    try {
        //找到
        const filename = dirName + '/package.json';
        console.log(filename);
        if (fs.existsSync(dirName)) {
            // 读取目标文件的package文件
            const content = fs.readFileSync(filename).toString();
            let dt = JSON.parse(content);
            dt.name = meta.name;
            dt.author = meta.author;
            dt.description = meta.description;
            dt.version = meta.version;
            //改写package.json 
            fs.writeFile(filename, JSON.stringify(dt), 'utf8', (err) => {
                if (err)
                    console.log(chalk.red(err));
                else {
                    console.log(chalk.green('Create Project Success! Good Lack!'));
                }
            })
        } else {
            throw new Error('there is no package.json in the template!')
        }
    } catch (err) {
        console.log(err);
    }
    return;
}