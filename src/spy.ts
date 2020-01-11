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
      if (passed === true) {
        return [true]
      }

      const translator = i18n[name]
      if (!translator) {
        return [false, originMessage]
      }

      const { when: whenMessages, value: valueMessages } = translator
      const whenMessage = whenMessages[when] || ''
      const valueMessage = valueMessages[value] || ''
      const message = whenMessage.replace(/\{value\}/ig, valueMessage || value)
      return [false, `${message} (${originMessage})`]
    }
  })

  return rules
}
