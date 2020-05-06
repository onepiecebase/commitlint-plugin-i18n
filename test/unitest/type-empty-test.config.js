module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['i18n'],
  rules: {
    'type-case': [2, 'always', ['sentence-case', 'upper-case', 'kebab-case']],
  },
}
