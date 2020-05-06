var shell = require('shelljs')

/* 先配置rule 
  "type-case": [2, "always", ['sentence-case', 'upper-case', 'kebab-case']],
*/

// fail
shell.echo('BUILD: test').exec('npx commitlint')

// success
shell.echo('build: test').exec('npx commitlint')
