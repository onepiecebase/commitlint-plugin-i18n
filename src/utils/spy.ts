import Rules from '@commitlint/rules'
import * as Typings from '../typings'

const translate = (type?: 'type-enum') => {
  return function (translator: Typings.TranslationRule, when: string, value: string | string[]): string {
    const whenMessage = translator[when] || ''

    // 防止没有配置 value
    const messages: string[] = []
    if (typeof value === 'string') {
      const translatorValue = translator.value || {}
      const message = translatorValue[value] || ''
      message && messages.push(message)
    }
  
    const translateEachValue = () => {
      if (Array.isArray(value)) {
        value.forEach((key) => {
          const translatorValue = translator.value || {}
          const value = translatorValue[key]
          messages.push(`${key}: ${value}`)
        })
      }
    }
  
    if (type === 'type-enum') {
      translateEachValue()
    } else if (messages.length === 0) {
      translateEachValue()
    }
  
    const valueMessage = messages.join('\n')
    const message = whenMessage.replace(/\{value\}/ig, valueMessage || value)
    return message
  }
}

export default function spy (i18n: Typings.Translations): LintRules {
  const rules: LintRules = {}
  Object.keys(Rules).forEach((name: string) => {
    const rule: LintRule = Rules[name]
    if (typeof rule !== 'function') {
      return
    }
  
    rules[name] = (parsed: LintParsed, when: string, value: string | string[]): LintResult => {
      const [passed, originMessage] = rule(parsed, when, value)
      if (passed === true) {
        return [true]
      }

      const translator = i18n[name]
      if (!translator) {
        return [false, originMessage]
      }

      if (name === 'type-enum') {
        return [false, `${translate('type-enum')(translator, when, value)} (${originMessage})`]
      }

      return [false, `${translate()(translator, when, value)} (${originMessage})`]
    }
  })

  return rules
}
