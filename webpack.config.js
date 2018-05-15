const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // set the targeted environment
  mode: 'production',
  optimization: {
    // instead of CommonsChunkPlugin
    splitChunks: {
      // min chunk size, if less then no split
      minSize: 50000,
      // generate separate vendor bundle including all packages under node_modules
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  // entry point
  entry: './src/index.tsx',
  // output bundle
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // generate source map
  devtool: 'source-map',
  resolve: {
    // js should also be added for the dependencies
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        // compile typescript code
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: { compress: true }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
