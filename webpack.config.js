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
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
        // vendors chunk contains all node_modules packages
        /* vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        } */
      }
    }
  },
  // multiple entry points
  entry: {
    index: './src/index.tsx',
    about: './src/about.tsx'
  },
  // output bundle
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
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
    // multiple outputs
    // commons contain the entry points shared packages
    // vendors contain all node_modules packages
    new HtmlWebpackPlugin({
      chunks: ['commons', 'index'], // ['vendors', 'index'],
      template: 'index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['commons', 'about'], // ['vendors', 'about'],
      template: 'about.html',
      filename: 'about.html'
    })
  ]
};
