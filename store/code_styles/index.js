const eslint_code = `
    module.exports = {
      root: true,
      env: {
        node: true
      },
      'extends': [
        'airbnb'
      ],
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': 'off',
        'space-before-function-paren': 'off',
        'import/no-unresolved': 'off',
        'object-curly-spacing': 'off',
        'no-extra-boolean-cast': 'off',
        'max-len': ['error', { 'code': 150 }],
        'vue/script-indent': ['error', 2, { 'baseIndent': 1 }]
      },
      'overrides': [
        {
          'files': ['*.js'],
          'rules': {
            'vue/script-indent': 'off'
          }
        },
        {
          'files': ['*.vue'],
          'rules': {
            'indent': 'off'
          }
        }
      ],
      parserOptions: {
        parser: 'babel-eslint'
      }
    }
  `

const codestylesState = () => ({
  searchKey: 'styles',
  styles: {
    eslint: {
      name: 'Eslint',
      code: eslint_code,
      type: 'javascript',
      description: 'Eslint to be used in the Candy Digital projects.',
      tags: ['eslint', 'javascript']
    }
  }
})

const codestylesGetters = () => ({
  styles: state => state.code_styles.styles
})

export { codestylesGetters, codestylesState }
