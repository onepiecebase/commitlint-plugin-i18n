module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['i18n'],
  rules: {
    'type-enum': [2, 'always', ['build', 'test']],
  },
}
