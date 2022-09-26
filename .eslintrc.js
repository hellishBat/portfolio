module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-uses-react': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off', // Recommended to turn ON
    '@typescript-eslint/no-empty-interface': 'off', // Recommended to turn ON
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
