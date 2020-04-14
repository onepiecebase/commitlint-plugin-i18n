var shell = require('shelljs')

/* 先配置rule 
  "footer-leading-blank": [2, "always"],
*/

// fail
shell.echo('build(): test\n\nbodyss\nsdfsd').exec('npx commitlint')

// success
shell.echo('build(): test\n\nbodyss\n\n\nsdfsd').exec('npx commitlint')
