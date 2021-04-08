const getNameEmail = require('../utils/git-user.js');

const {
    name,
    email
} = getNameEmail();

module.exports = [{
        type: 'input',
        name: 'author',
        default: name,
        message: 'author'
    },
    {
        type: 'input',
        name: 'email',
        default: email,
        message: 'email'
    },
    {
        type: 'input',
        name: 'description',
        default: 'no description',
        message: 'description'
    },
    {
        type: 'input',
        name: 'version',
        default: '1.0.0',
        message: 'version'
    },
    {
        type: 'list',
        name: 'template',
        default: 0,
        message: 'choose a template',
        validate: function (input) {
            if (!input) {
                return 'template should not be empty'
            }
            return true
        },
        choices: [{
                name: 'React',
                value: 'React'
            },
            {
                name: 'Vue',
                value: 'Vue'
            }, {
                name: 'Express',
                value: 'Express'
            }
        ]
    },

    {
        type: 'confirm',
        name: 'install',
        default: true,
        message: 'auto install modules?'
    },
    {
        type: 'list',
        name: 'installer',
        default: 1,
        message: 'choose a installer',
        validate: function (input) {
            if (!input) {
                return 'template should not be empty'
            }
            return true
        },
        choices: [{
                name: 'npm',
                value: 'npm'
            },
            {
                name: 'yarn',
                value: 'yarn'
            }
        ]
    },
]