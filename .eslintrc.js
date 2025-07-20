module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true, // Игнорировать URL
        ignoreStrings: true, // Игнорировать строки в кавычках
        ignoreComments: true, // Ингорировать коменты
        ignoreTrailingComments: true, // Ингорировать коменты
        ignoreTemplateLiterals: true, // Игнорировать `шаблонные строки`
        ignoreRegExpLiterals: true, // Игнорировать /регулярки/
      },
    ],
    'operator-linebreak': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/destructuring-assignment': [0, 'never'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/function-component-definition': 'off',
    'react/button-has-type': 'off',
    'no-shadow': 'off',
    camelcase: 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
