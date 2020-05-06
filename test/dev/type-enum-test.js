var shell = require('shelljs')

/* 可配置自定义type rule 
  "type-enum": [2, "never" | "always", ['build', 'test']],
*/

// 触发提交类型 fail
shell.echo('far(): Test').exec('npx commitlint')

// 触发提交类型 success
shell.echo('build(): test').exec('npx commitlint')
