module.exports = [{
        type: 'input',
        name: 'name',
        message: 'Project name'
    }, {
        type: 'input',
        name: 'author',
        message: 'author'
    },
    {
        type: 'input',
        name: 'description',
        message: 'description'
    },
    {
        type: 'input',
        name: 'version',
        message: 'version'
    },
    {
        type: 'list',
        name: 'template',
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
]