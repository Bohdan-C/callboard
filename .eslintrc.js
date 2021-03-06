module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-restricted-globals': ['error', 'none'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: [2, 'always'],
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'no-param-reassign': 0,
    'linebreak-style': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'react/jsx-one-expression-per-line': 0,
    'nonblock-statement-body-position': 0,
    'no-confusing-arrow': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-props-no-spreading': 1,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
  },
};
