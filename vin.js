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
const templates = require('./config.js')
const insert = require('./insert.js');
const {
    type
} = require('os');
program.version('0.0.1', '-V, --version', 'vin脚手架版本');
//命令
program
    .command('init <dirName>')
    .description('choose download template')
    .action(dirName => {
        inquirer.prompt(promps).then(function (answers) {
            console.log()
            const meta = {};
            meta.name = answers.name || "no name";
            meta.author = answers.author || 'anonymous';
            meta.description = answers.description || 'no description';
            meta.version = answers.version || '1.0.0';
            meta.template = answers.template || 'React';
            //新建项目文件夹
            fs.mkdirSync(dirName, (err) => {
                if (err) {
                    throw new Error('dir already exists');
                }
            })
            let remoteTemplateUrl = '';
            switch (answers.template) {
                case 'React':
                    remoteTemplateUrl = templates.React;
                    break;
                case 'Vue':
                    remoteTemplateUrl = templates.Vue;
                    break;
                case 'Express':
                    remoteTemplateUrl = templates.Express;
                    break;
                default:
                    throw new Error('no template match!')
                    break;
            }
            spinner.start('downloading template');
            download(remoteTemplateUrl, dirName).then(() => {
                spinner.succeed('template download success!');
                try {
                    insert(dirName, meta);
                } catch (err) {
                    console.log(err);
                }
                console.log();
                console.log(chalk.cyan('Next, you could'))
                console.log(chalk.cyan('cd ' + dirName))
                console.log(chalk.cyan('yarn'))
                console.log(chalk.cyan('yarn start'))
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