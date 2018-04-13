const path = require('path');

const name = `nric-malaysia${process.env.NODE_ENV === 'production' ? '.min' : ''}`;

module.exports = {
  mode: 'production',
  entry: './src/nric-malaysia.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${name}.js`,
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'NRICUtil',
    globalObject: 'this',
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  externals: {
    moment: {
      commonjs: 'moment',
      commonjs2: 'moment',
      amd: 'moment',
      root: 'moment',
    },
  },
};
