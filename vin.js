#! /usr/bin/env node


const {
    program,
    Option
} = require('commander')
const _ = require('loadsh')
const inquirer = require('inquirer')
const fs = require('fs');
const download = require('./utils/download.js')
const spinner = require('./utils/spinner.js')
const chalk = require('chalk')
const promps = require('./promps.js')
const {
    dirname
} = require('path');
program.version('0.0.1', '-V, --version', 'vin脚手架版本');
//选项
program
    .option('-D, --debug <fileName...>', 'output extra debugging')
    .option('-T, --test <fileName..>', 'test the files')
    .addOption(new Option('-T, --template <type>', 'template type').choices(['react', 'vue', 'normal']))

//命令
program
    .command('init <dirName>')
    .description('choose download template')
    .action(dirName => {
        var config = _.assign({
            template: '',
            description: '',
            sass: false,
            less: false
        }, {})
        inquirer.prompt(promps).then(function (answers) {
            console.log()
            //新建项目文件夹
            fs.mkdirSync(dirName, (err) => {
                if (err) {
                    throw new Error('dir already exists');
                }
            })
            let remoteTemplateUrl = '';
            switch (answers.template) {
                case 'React':
                    remoteTemplateUrl = 'krasimir/react-webpack-starter';
                    break;
                case 'Vue':
                    remoteTemplateUrl = 'vuejs-templates/pwa';
                    break;
                default:
                    break;
            }
            spinner.start('正在下载模板');
            download(remoteTemplateUrl, dirName).then(() => {
                spinner.succeed('模板下载成功!');
                console.log();
                console.log(chalk.cyan('你可以进行以下操作:'))
                console.log(chalk.cyan('cd ' + dirName))
                console.log(chalk.cyan('yarn'))
                console.log(chalk.cyan('yarn run dev'))

            }).catch((err) => {
                spinner.fail(err)
            });
        })
    })
    .on('--help', function () {
        console.log(' Examples:')
        console.log('')
        console.log('$ vinvin init')
    })
program.parse(process.argv)