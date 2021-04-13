const {
    templateRepos
} = require('../lib/config.js');
module.exports = function getTemplateRepo(template) {
    return templateRepos[template];
}