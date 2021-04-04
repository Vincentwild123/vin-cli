### Vin脚手架

#### 所需工具包

1. commander   ---    定义脚手架的命令和options
2. inquirer    ---    与用户交互
3. chalk       ---    美化，颜色
4. download-git-repo  ---    拉取github模板文件  

**使用:[gitHub/gitLab/Bitbuck]:[user/repo]**

5. ora         ---    加载动画

#### commander包

1. program全局对象

``` js
const {
    program
} = require('commander')
```

2. 选项 options

``` js
//1. 定义选项和简介
.option('-d,--debug', 'debug for the program')
    //2. 选项设置参数
    .option('-s,--small', 'set the args')
//3. 选项的读取
program.opts()

//4. 没指定选项，则该选项为undefined

//5.选项的默认值
program.option('c,--cheese <type>', 'description', 'default value')
```

3. 版本

**program.version('0.0.1')**

4. 命令

``` js
// 第一个参数可以配置命令名称及命令参数， 参数支持必选（ 尖括号表示）、 可选（ 方括号表示） 及长参数（ 点号表示， 如果使用， 只能是最后一个参数
program
    .command('clone <source> [destination]')
    .description('clone a repository into a newly created directory')
    .action((source, destination) => {
        console.log('clone command called');
    });


    
```
