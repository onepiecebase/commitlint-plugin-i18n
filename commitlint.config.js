module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['i18n'],
  rules: {
    // "type-case": [2, "always", ['sentence-case', 'upper-case', 'kebab-case']],
    // "type-enum": [2, "never", ['build', 'test']],
    // "body-leading-blank": [2, "never"],
    // "body-max-length": [2, "always", 5],
    'footer-leading-blank': [2, 'always'],
  },
}
