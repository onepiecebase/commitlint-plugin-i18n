import spy from './spy'

const CharCase = {
  'lower-case': '小写',
  'upper-case': '大写',
  'camel-case': '驼峰',
  'kebab-case': '中横杠',
  'pascal-case': '首母大写驼峰',
  'sentence-case': '句子',
  'snake-case': '下划线',
  'start-case': '首字母大写',
}

const Messages = {
  'type-empty': {
    when: {
      never: '变更类型不能为空',
      always: '变更类型必须为空'
    }
  },
  'scope-case': {
    value: CharCase,
    when: {
      never: '头部不能为{value}',
      always: '头部必须为{value}'
    }
  }
}

export = {
  rules: spy(Messages)
}
