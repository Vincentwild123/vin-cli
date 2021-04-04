module.exports = [{
        type: 'list',
        name: 'template',
        message: '请选择模板',
        validate: function (input) {
            if (!input) {
                return '模板不能为空'
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
            }
        ]
    }, {
        type: 'input',
        name: 'moduleDescription',
        message: '请输入模块描述'
    },
    {
        type: 'list',
        name: 'cssPretreatment',
        message: '想用什么css预处理器呢',
        choices: [{
                name: 'Sass',
                value: 'sass'
            },
            {
                name: 'Less',
                value: 'less'
            }, {
                name: 'stylus',
                value: 'stylus'
            }
        ]
    }
]