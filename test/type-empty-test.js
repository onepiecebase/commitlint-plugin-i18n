var shell = require('shelljs');

// 触发提交类型为空 fail
shell.echo(': test').exec('npx commitlint')

// 触发提交类型不为空 success
shell.echo('far: test').exec('npx commitlint')