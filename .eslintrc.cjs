module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
      'plugin:eslint-plugin-internal/base',
      'plugin:eslint-plugin-internal/typescript',
      'plugin:eslint-plugin-internal/prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
}
