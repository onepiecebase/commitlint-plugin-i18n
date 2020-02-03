var shell = require('shelljs');

/* 先配置rule 
  "body-leading-blank": [2, "never"| "always"],
*/

// 触发提交类型 fail
shell.echo('build(): test\nbody').exec('npx commitlint')

// 触发提交类型 success
shell.echo('build(): test\n\nbody').exec('npx commitlint')


shell.echo('build(): test\n\nbodyss').exec('npx commitlint')