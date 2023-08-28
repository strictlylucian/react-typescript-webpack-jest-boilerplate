const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
  '@assets': 'assets',
  '@src': 'src',
});