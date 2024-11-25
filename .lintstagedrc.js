export default {
  '*.{md,html,css}': 'prettier --write',
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '**/versions/**/**': 'node ./src/generate-version.js',
};
