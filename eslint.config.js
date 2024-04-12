const js = require('@eslint/js')
const prettier = require('eslint-config-prettier')
const vue = require('eslint-plugin-vue')
const globals = require('globals')

module.exports = [
  js.configs.recommended,
  ...vue.configs['flat/vue2-recommended'],
  prettier,
  {
    files: ['src/**/*.js', 'src/**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@babel/eslint-parser',
      },
      globals: {
        ...globals.browser,
        // FIXME: This should be handled by the parser since babel transpiles these.
        require: true,
        module: true,
      },
    },
    rules: {
      'no-console': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.js'],
    ignores: ['src/**'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['node_modules', 'dist'],
  },
]
