module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['i18n'],
  rules: {
    'body-leading-blank': [2, 'always'],
  },
}
