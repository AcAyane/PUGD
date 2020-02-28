module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],

  plugins: ['prettier'],

  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'no-descending-specificity': true
  }
};
