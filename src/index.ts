import Locale from 'os-locale'
import zhCN from './i18n/zh-CN'

let defaultsRules = {}
switch (Locale.sync()) {
  case 'zh-CN':
    defaultsRules = zhCN
    break
}

export default defaultsRules
