module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
  ],
  plugins: [
    'flowtype',
  ],
  rules: {
    'import/prefer-default-export': ['off'],
    'import/no-unresolved': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-shadow': ['off'],
    'react/destructuring-assignment': [0],
    'no-case-declarations': ['off'],
    // More readable braces style,
    // learn more here: https://eslint.org/docs/rules/brace-style
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    // Increasing maximum lines to 120 instead of default 80,
    // learn more here: https://eslint.org/docs/rules/max-len
    'max-len': [2, 120, 2, { ignoreUrls: true }],
    // parseInt shouldn't be always require to pass 10 in optional arguments
    // learn more here: https://eslint.org/docs/rules/radix
    radix: 0,
    // Else statement is required for better readability even when returning in if condition,
    // learn more here: https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['off'],
    // Using _ in start of variable name, to denote private variables,
    // learn more here: https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': ['off'],
    'no-nested-ternary': 1,
    // Alternate text is not required, as it is no contributing that much to the code quality
    // learn more here: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': ['off'],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    // It shows errors in classes methods too, where a method is returning a component, but we can use
    // this in class methods, so ignoring it.
    // learn more here: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': ['off'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-noninteractive-element': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      controlComponents: ['Input'],
      depth: 3,
    }],
  },
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      classes: true,
      arrowFunctions: true,
      jsx: true,
      modules: true,
    }
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  ignorePatterns: ['src/tools/*'],
};
