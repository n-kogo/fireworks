module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['.js'] // note if using webpack 1 you'd also need a '' in the array as well 
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }],

  },
  devServer: {
    compress: true,
    port: 9000
  }
};
