const IGNORE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'import'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  globals: {
    localStorage: true,
    sessionStorage: true,
    document: true,
    window: true,
  },
  rules: {
    'multiline-ternary': [
      'error', 'always-multiline'
    ],
    'max-len': [
      'error',
      {
        'ignoreStrings': true,
        'ignoreRegExpLiterals': true,
        'ignoreTemplateLiterals': true,
        'ignoreUrls': true,
        'ignoreTrailingComments': true,
        'tabWidth': 2,
        'code': 80
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'key-spacing': [
      'error', {
        'afterColon': true,
        'beforeColon': false
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'prefer-destructuring': [
      'error',
      {
        'VariableDeclarator': {
          'array': true,
          'object': true
        },
        'AssignmentExpression': {
          'array': true,
          'object': true
        }
      },
      {
        'enforceForRenamedProperties': false
      }
    ],
    'no-extra-parens': ERROR,
    'prefer-template': ERROR,
    'prefer-spread': ERROR,
    'prefer-arrow-callback': ERROR,
    'no-duplicate-imports': ERROR,
    'arrow-spacing': ERROR,
    'spaced-comment': [
      'error',
      'always'
    ],
    'prefer-object-spread': ERROR,
    'no-whitespace-before-property': ERROR,
    'no-unneeded-ternary': ERROR,
    'no-nested-ternary': ERROR,
    'no-multi-assign': ERROR,
    'no-lonely-if': ERROR,
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'curly': ERROR,
    'no-console': WARN,
    'no-debugger': ERROR,
    'no-var': ERROR,
    'semi': ERROR,
    'no-trailing-spaces': ERROR,
    'eol-last': IGNORE,
    'no-underscore-dangle': IGNORE,
    'no-alert': ERROR,
    'no-lone-blocks': IGNORE,
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true
      }
    ],
    'import/extensions': IGNORE
  }
};
