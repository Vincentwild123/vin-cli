const download = require("download-git-repo");
const path = require("path");
const rimraf = require("rimraf");

module.exports = function downTemplateFile(url, dir) {
    dir = path.join(process.cwd(), dir);
    return new Promise((resolve, reject) => {
        //clear dir
        rimraf.sync(dir, {});
        //download template
        download(url, dir, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        })
    })
}