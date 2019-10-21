module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  extends: ['zurgbot', 'plugin:jsx-a11y/recommended']
};
