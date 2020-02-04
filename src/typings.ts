export interface TranslationTypes {
  [key: string]: string
}

export interface TranslationRule {
  value?: { [key: string]: any }
  never: string
  always: string
}

export interface Translations {
  [key: string]: TranslationRule
}
