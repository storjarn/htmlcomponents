const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'HTMLComponents',
    // libraryTarget: 'umd'
  }
};
