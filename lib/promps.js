const getNameEmail = require('../utils/git-user.js');

const {
    name,
    email
} = getNameEmail();

module.exports = [{
        type: 'input',
        name: 'author',
        default: name,
        message: 'Author'
    },
    {
        type: 'input',
        name: 'email',
        default: email,
        message: 'Email'
    },
    {
        type: 'input',
        name: 'description',
        default: 'no description',
        message: 'Description'
    },
    {
        type: 'input',
        name: 'version',
        default: '1.0.0',
        message: 'Version'
    },
    {
        type: 'list',
        name: 'template',
        default: 0,
        message: 'Choose a template',
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
        name: 'autoInstall',
        default: true,
        message: 'Auto install dependences?'
    },
    {
        type: 'list',
        name: 'installer',
        default: 1,
        message: 'Choose a installer',
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
            }, {
                name: 'cnpm',
                value: 'cnpm'
            }
        ]
    },
]