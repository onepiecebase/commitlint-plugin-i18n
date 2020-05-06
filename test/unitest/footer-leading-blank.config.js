module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['i18n'],
  rules: {
    'footer-leading-blank': [2, 'always'],
  },
}
