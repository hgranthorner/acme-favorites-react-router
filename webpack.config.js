const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src'),
  output; path.join(__dirname, 'dist'),
  filename: 'bundle.js',
  module: {
    loader: 'babel-loader',
    options: {
      presets: ['es2015']
    }
  },
  devtool: 'source-map',
  externals: ['react']
}
