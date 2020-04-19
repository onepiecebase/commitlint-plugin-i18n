import spy from '..//utils/spy'
import * as Typings from '../typings'

/**
 * Scope 格式提示
 */
const CharCase: Typings.TranslationTypes = {
  'lower-case': '小写',
  'upper-case': '大写',
  'camel-case': '驼峰',
  'kebab-case': '中横杠',
  'pascal-case': '首母大写驼峰',
  'sentence-case': '句子',
  'snake-case': '下划线',
  'start-case': '首字母大写',
}

/**
 * Type 类型提示
 */
const TypeEnum: Typings.TranslationTypes = {
  build: '涉及构建工具或构建过程等的变动, eg: 修改webpack配置, 关联包升级等.',
  chore: '杂类, 不属于以上类型的其他类.',
  ci: '修改项目持续集成流程, eg: Travis, Jenkins, GitLab CI, Circle等.',
  docs: '项目中相关文档修改请使用此类型, eg: 修改README.md.',
  feat: '新功能开发.',
  fix: '修复 bug.',
  improvement: '用于对当前实现进行改进而没有添加新功能或修复错误的提交.',
  perf: '优化相关, eg: 提升性能, 用户体验等.',
  refactor: '源代码重构，既不修复 bug 也不增加功能.',
  revert: '回滚到上一个版本.',
  style: '与代码风格相关的变更, eg: 修正代码风格, ESLint代码格式化.',
  test: '增加新测试或者更正当前已有测试.',
}

/**
 * 错误信息
 */
const Messages: Typings.Translations = {
  'type-empty': {
    never: '变更类型不能为空',
    always: '变更类型必须为空',
  },
  'type-enum': {
    value: TypeEnum,
    never: '您不能选择以下变更类型:\n{value}',
    always: '您必须在以下类型中:\n--------------------\n{value}\n--------------------\n选择合适的变更类型',
  },
  'type-case': {
    value: CharCase,
    never: '变更类型不能为: {value}',
    always: '变更类型必须为: {value}',
  },
  'scope-case': {
    value: CharCase,
    never: '头部不能为{value}',
    always: '头部必须为{value}',
  },
  'subject-case': {
    value: CharCase,
    never: '主题内容不能为\n{value}',
    always: '主题内容必须为\n{value}',
  },
  'body-leading-blank': {
    never: '编辑body时, 不能以空白行为开始',
    always: '编辑body时, 建议先插入一行空白行 再进行编辑',
  },
  'body-max-length': {
    // 此条规则设置never 和 always无效
    never: 'body字数不能超过{value}个字符',
    always: 'body字数不能超过{value}个字符',
  },
  'body-min-length': {
    // 此条规则设置never 和 always无效
    never: 'body字数不能少于{value}个字符',
    always: 'body字数不能少于{value}个字符',
  },
  'body-max-line-length': {
    // 此条规则设置never 和 always无效
    never: 'body行数不能超过{value}行',
    always: 'body行数不能超过{value}行',
  },
  'footer-leading-blank': {
    never: '编辑footer时, 不能以空白行为开始',
    always: '编辑footer时, 建议先插入一行空白行 再进行编辑',
  },
  'footer-max-length': {
    // 此条规则设置never 和 always无效
    never: 'footer字数不能超过{value}个字符',
    always: 'footer字数不能超过{value}个字符',
  },
  'footer-min-length': {
    // 此条规则设置never 和 always无效
    never: 'footer字数不能少于{value}个字符',
    always: 'footer字数不能少于{value}个字符',
  },
  'footer-max-line-length': {
    // 此条规则设置never 和 always无效
    never: 'footer行数不能超过{value}行',
    always: 'footer行数不能超过{value}行',
  },
}
// 全局格式
const pattern = '变更类型(变更范围[可选]): 主题\n<空一行>\ncommit描述内容[可选]\n<空一行>\n脚注(用于描述不兼容变动和关闭ISSUE)[可选]\n'

export = {
  rules: spy()(Messages, pattern),
}
