import Locale from 'os-locale'
import zhCN from './i18n/zh-CN'

let defaultsRules = {}
// eslint-disable-next-line @typescript-eslint/camelcase
switch (process.env.commitlint_plugin_i18n || Locale.sync()) {
  case 'zh-CN':
    defaultsRules = zhCN
    break
}

module.exports = defaultsRules
