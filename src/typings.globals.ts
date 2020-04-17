declare interface LintParsed {
  type: string | null
  scope: string | null
  subject: string | null
  merge: string | null
  header: string | null
  body: string | null
  footer: string | null
  notes: string[]
  references: string[]
  mentions: string[]
  revert: string | null
  raw: string
}

declare type LintResult = [boolean, string?]

declare type LintRule = (parsed: LintParsed, when: string, value: any) => LintResult

declare type LintRules = {
  [key: string]: LintRule
}
