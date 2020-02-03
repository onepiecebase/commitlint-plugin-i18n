import Rules from '@commitlint/rules'

export default function spy (i18n): LintRules {
  const rules: LintRules = {}
  Object.keys(Rules).forEach((name: string) => {
    const rule: LintRule = Rules[name]
    if (typeof rule !== 'function') {
      return
    }
  
    rules[name] = (parsed: LintParsed, when: string, value: any): LintResult => {
      const [passed, originMessage] = rule(parsed, when, value)
      console.log('passed',passed ,name, 'value --->', value)
      if (passed === true) {
        return [true]
      }

      const translator = i18n[name]
      if (!translator) {
        return [false, originMessage]
      }
      if (name === 'type-enum') {
        return [false, `${checkTypeEnum(translator, when, value)} (${originMessage})`]
      }
      // console.log('translator-->',translator)
      // console.log('when-->',translator[when])
      const whenMessage = translator[when] || ''
      // 防止没有配置value
      let valueMessage = translator.value && translator.value[value] || ''
      if(!valueMessage && Array.isArray(value)) {
        value.forEach((item) => {
          valueMessage = valueMessage + `${translator.value[item]} `
        })
      }
      const message = whenMessage.replace(/\{value\}/ig, valueMessage || value)
      return [false, `${message} (${originMessage})`]
    }
  })

  return rules
}

// typeEnum 需要遍历每一个类型的Tips
const checkTypeEnum = (translator, when, value) => {
  const whenMessage = translator[when] || ''
      // 防止没有配置value
      let valueMessage = translator.value && translator.value[value] || ''
      if(Array.isArray(value)) {
        value.forEach((item) => {
          valueMessage = valueMessage + `${item}: ${translator.value[item]}\n`
        })
      }
      const message = whenMessage.replace(/\{value\}/ig, valueMessage || value)
      return message
}