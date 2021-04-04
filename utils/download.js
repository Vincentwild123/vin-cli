const download = require("download-git-repo");
const path = require("path");
const rimraf = require("rimraf");

module.exports = function downTemplateFile(url, dir) {
    try {
        if (!dir || typeof dir !== 'string') {
            throw new Error('下载路径参数非法，应为非空字符串');
        }
        if (!url || typeof url !== 'string') {
            throw new Error('远程模板文件路径参数非法，应为非空字符串');
        }
    } catch (err) {
        reject(err);
        return;
    }
    dir = path.join(process.cwd(), dir);
    return new Promise((resolve, reject) => {
        //清空目录
        rimraf.sync(dir, {});
        //下载模板
        download(url, dir, function (err) {
            if (err) {
                reject(error);
                return;
            }
            resolve();
        })
    })
}