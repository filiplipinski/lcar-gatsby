const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['babel', 'react-hooks', 'graphql', 'prettier'],
  // graph plugin is for: eslint-plugin-graphql
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    GatsbyTypes: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        proseWrap: 'always',
      },
    ],
    'arrow-body-style': 0,
    'no-unused-vars': 1, // 1=warn
    'import/extensions': 0,
    'import/no-absolute-path': 0,
    'global-require': 0,
    'no-useless-catch': 0,
    'lines-between-class-members': 0,
    'eol-last': 'error',
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 3,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-tag-spacing': 1,
    // below for graphql typegen
    'graphql/template-strings': [
      'error',
      {
        env: 'relay',
        tagName: 'graphql',
        schemaJsonFilepath: path.resolve(__dirname, 'src/__generated__/gatsby-introspection.json'),
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
